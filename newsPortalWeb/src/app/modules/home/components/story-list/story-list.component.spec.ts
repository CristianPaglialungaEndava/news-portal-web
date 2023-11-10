import { StoryDto } from 'src/app/Models/Dtos/get-news-response-dto';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryListComponent } from './story-list.component';
import { StoryItemComponent } from '../story-item/story-item.component';
import { MatCardModule } from '@angular/material/card';

describe('StoryListComponent', () => {
  let component: StoryListComponent;
  let fixture: ComponentFixture<StoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatCardModule],
      declarations: [ StoryListComponent,StoryItemComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display story items', () => {
    const storyList: StoryDto[] = [
      {title:"titl1",url:"http://www.test.com",id:1} as StoryDto,
      {title:"title2",url:"http://www.test.com",id:2} as StoryDto,
      {title:"title3",url:"http://www.test.com",id:3} as StoryDto,
      {title:"title4",url:"http://www.test.com",id:4} as StoryDto,
      {title:"title5",url:"http://www.test.com",id:5} as StoryDto,
    ];

    component.storyList = storyList;
    fixture.detectChanges();

    const storyItems = fixture.nativeElement.querySelectorAll('.story-item');
    expect(storyItems.length).toEqual(storyList.length);
  });
});
