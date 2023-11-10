import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsPortalService } from 'src/app/services/news-portal/news-portal.service';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let httpMock: HttpTestingController;
  let service: NewsPortalService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,MatPaginatorModule,BrowserAnimationsModule],
      providers:[NewsPortalService],
      declarations: [ PaginatorComponent ],
      schemas:[NO_ERRORS_SCHEMA]
  })
  .compileComponents();
  
    service = TestBed.inject(NewsPortalService);
    httpMock =  TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
