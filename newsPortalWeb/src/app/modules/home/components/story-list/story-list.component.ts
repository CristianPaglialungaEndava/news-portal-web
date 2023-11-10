import { Component, Input } from '@angular/core';
import { StoryDto } from 'src/app/Models/Dtos/get-news-response-dto';
@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss']
})
export class StoryListComponent {
  @Input() storyList: StoryDto[] = []
}
