import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { GetStoriesRequestDto } from 'src/app/Models/Dtos/get-news-request-dto';
import { NewsPortalService } from 'src/app/services/news-portal/news-portal.service';

@Component({
  selector: 'app-story-filter',
  templateUrl: './story-filter.component.html',
  styleUrls: ['./story-filter.component.scss']
})
export class StoryFilterComponent implements OnInit {

  constructor(private fb: FormBuilder,private newService: NewsPortalService) {
  }
  public filterForm = this.fb.group({
    title: [''], // String field for title with required validation
    storyType: ['new', Validators.required] // String field for storyType with required validation
  });
  ngOnInit(): void {
    //this.filterForm.controls.storyType.valueChanges.subscribe(()=>this.sendFilterParams())
    this.filterForm.controls.title.valueChanges.pipe(debounceTime(1000)).subscribe(()=>this.sendFilterParams())
  }
  
  sendFilterParams(){
    const filter = {
      criteria:this.filterForm.value
    } as GetStoriesRequestDto;
    if(filter.criteria?.storyType ==='all')
      delete filter.criteria.storyType;
    this.newService.NotifyCriteriaChanges(filter)
  }
}
