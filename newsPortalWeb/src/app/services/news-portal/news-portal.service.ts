import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, take } from 'rxjs';
import { GetStoriesRequestDto } from 'src/app/Models/Dtos/get-news-request-dto';
import { GetStoriesResponseDto } from 'src/app/Models/Dtos/get-news-response-dto';

@Injectable({
  providedIn: 'root'
})
export class NewsPortalService {

  constructor(private http: HttpClient) { }
  private $paginatedAndFilteredStories = new BehaviorSubject<GetStoriesResponseDto| null>(null);
  private baseUrl = 'https://localhost:44317';
  private filter:GetStoriesRequestDto ={
    page:1,
    pageSize:5,
    criteria:{
      title: undefined,
      storyType: 'new'
    }
  } 
  
  getStories(): BehaviorSubject<GetStoriesResponseDto | null> {
    this.getStoriesByCriteria().subscribe( result => 
      this.$paginatedAndFilteredStories.next(result));
    return this.$paginatedAndFilteredStories;
  }
  NotifyCriteriaChanges(criteria: GetStoriesRequestDto){
    this.filter ={
      ...this.filter,...criteria
    }
    this.getStoriesByCriteria().subscribe(result =>{
      this.$paginatedAndFilteredStories.next(result);
    })
  }
  private getStoriesByCriteria(): Observable<GetStoriesResponseDto> {

    return this.http
      .post<GetStoriesResponseDto>(`${this.baseUrl}/api/Story`, this.filter)
      .pipe(catchError(this.handleError), take(1));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return new Observable<never>();
  }
}
