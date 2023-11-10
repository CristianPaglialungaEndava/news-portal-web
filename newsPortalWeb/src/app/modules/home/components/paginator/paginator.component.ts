import { trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { GetStoriesRequestDto } from 'src/app/Models/Dtos/get-news-request-dto';
import { NewsPortalService } from 'src/app/services/news-portal/news-portal.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() length:number = 0;
  @Input() pageSize:number = 5;
  pageSizeOptions:number[]= [5, 10 , 20];

  constructor(private newsService: NewsPortalService) {
    
  }
  sendPaginationInfo(e: PageEvent) {
    const paginationValue = {} as GetStoriesRequestDto;
    if(this.pageSize !== e.pageSize){
      paginationValue.pageSize=e.pageSize
      this.pageSize= e.pageSize
      paginationValue.page= 1;
    }else{
      paginationValue.page = e.pageIndex+1
    }
    this.newsService.NotifyCriteriaChanges(paginationValue)
  }
}
