import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { GetStoriesRequestDto } from 'src/app/Models/Dtos/get-news-request-dto';
import { GetStoriesResponseDto } from 'src/app/Models/Dtos/get-news-response-dto';

@Injectable({
  providedIn: 'root'
})
export class NewsPortalService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'https://localhost:44317';
  getStories(request?: GetStoriesRequestDto): Observable<any> {

    return this.http
      .post<GetStoriesResponseDto>(`${this.baseUrl}/api/Story`, request || {})
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return new Observable<never>();
  }
}
