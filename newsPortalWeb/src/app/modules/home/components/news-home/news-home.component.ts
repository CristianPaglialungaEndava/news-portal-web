import { Component } from '@angular/core';
import { Observable, filter, map } from 'rxjs';
import { GetStoriesResponseDto, StoryDto } from 'src/app/Models/Dtos/get-news-response-dto';
import { NewsPortalService } from 'src/app/services/news-portal/news-portal.service';

@Component({
  selector: 'app-news-home',
  templateUrl: './news-home.component.html',
  styleUrls: ['./news-home.component.scss']
})
export class NewsHomeComponent {

  public $news? :Observable<GetStoriesResponseDto| null>; 
  constructor(private newService: NewsPortalService) {
    this.$news = newService.getStories();
  }

  
}
