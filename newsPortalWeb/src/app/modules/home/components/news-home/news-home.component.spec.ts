import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsHomeComponent } from './news-home.component';
import { NewsPortalService } from 'src/app/services/news-portal/news-portal.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NewsHomeComponent', () => {
  let component: NewsHomeComponent;
  let fixture: ComponentFixture<NewsHomeComponent>;
  let service: NewsPortalService;
  let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ NewsHomeComponent ],
      providers:[NewsPortalService]
    })
    .compileComponents();
    
    httpMock =  TestBed.inject(HttpTestingController);
    service = TestBed.inject(NewsPortalService);
    fixture = TestBed.createComponent(NewsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
