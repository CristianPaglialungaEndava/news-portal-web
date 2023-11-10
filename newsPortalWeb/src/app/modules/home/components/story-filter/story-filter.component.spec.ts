import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFilterComponent } from './story-filter.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsPortalService } from 'src/app/services/news-portal/news-portal.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StoryFilterComponent', () => {
  let component: StoryFilterComponent;
  let fixture: ComponentFixture<StoryFilterComponent>;
  let httpMock: HttpTestingController;
  let service: NewsPortalService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, MatButtonToggleModule, MatInputModule, FormsModule, ReactiveFormsModule,BrowserAnimationsModule],
      providers:[NewsPortalService,FormBuilder],
      declarations: [ StoryFilterComponent ]
  })
  .compileComponents();
  
    service = TestBed.inject(NewsPortalService);
    httpMock =  TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(StoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
