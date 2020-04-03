import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbacksRoutingModule } from './feedbacks.routing.module';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [DetailsComponent, EditComponent, ListComponent, NewComponent],
  imports: [
    CommonModule,
    FeedbacksRoutingModule
  ]
})
export class FeedbacksModule { }
