import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryItemComponent } from './story-item.component';
import { MatCardModule } from '@angular/material/card';
import { StoryDto } from 'src/app/Models/Dtos/get-news-response-dto';

describe('StoryItemComponent', () => {
  let component: StoryItemComponent;
  let fixture: ComponentFixture<StoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatCardModule],
      declarations: [ StoryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryItemComponent);
    component = fixture.componentInstance;
    const story = {title:'test'} as StoryDto
    component.story=story;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
