import { Component, Input } from '@angular/core';
import { StoryDto } from 'src/app/Models/Dtos/get-news-response-dto';

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.scss']
})
export class StoryItemComponent {
  @Input() story! :StoryDto
  openLinkInNewTab(url: string) {
    window.open(url, '_blank');
  }
}
