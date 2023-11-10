import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsHomeComponent } from './components/news-home/news-home.component';
import { Route, RouterModule } from '@angular/router';
import { StoryItemComponent } from './components/story-item/story-item.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryFilterComponent } from './components/story-filter/story-filter.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';

const routes: Route[]= [
  {
    path: '',
    component: NewsHomeComponent
  }
]

@NgModule({
  declarations: [
    NewsHomeComponent,
    StoryItemComponent,
    StoryListComponent,
    StoryFilterComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule
  ]
})
export class HomeModule { }
