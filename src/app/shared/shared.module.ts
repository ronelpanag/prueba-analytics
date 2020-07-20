import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RatingModule } from 'ng-starrating';
import { TalkCardComponent } from './components/talk-card/talk-card.component';


@NgModule({
  declarations: [TalkCardComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RatingModule
  ],
  exports: [
    MDBBootstrapModule,
    RatingModule
  ]
})
export class SharedModule { }
