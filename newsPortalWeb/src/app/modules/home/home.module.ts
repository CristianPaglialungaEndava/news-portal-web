import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsHomeComponent } from './components/news-home/news-home.component';
import { Route, RouterModule } from '@angular/router';


const routes: Route[]= [
  {
    path: '',
    component: NewsHomeComponent
  }
]

@NgModule({
  declarations: [
    NewsHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
