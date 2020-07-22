import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TalkCardComponent } from './components/talk-card/talk-card.component';
import { BaseHttpService } from './framework/base-http.service';
import { NgRatingBarModule } from 'ng-rating-bar';


@NgModule({
  declarations: [TalkCardComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NgRatingBarModule
  ],
  exports: [
    MDBBootstrapModule,
    TalkCardComponent,
    NgRatingBarModule
  ],
  providers: [BaseHttpService]
})
export class SharedModule { }
