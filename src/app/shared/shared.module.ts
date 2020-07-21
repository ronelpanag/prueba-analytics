import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RatingModule } from 'ng-starrating';
import { TalkCardComponent } from './components/talk-card/talk-card.component';
import { BaseHttpService } from './framework/base-http.service';


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
  ],
  providers: [BaseHttpService]
})
export class SharedModule { }
