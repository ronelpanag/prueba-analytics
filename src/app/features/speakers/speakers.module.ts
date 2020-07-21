import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakersRoutingModule } from './speakers-routing.module';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { SpeakersService } from './speakers.service';


@NgModule({
  declarations: [DetailsComponent, ListComponent, EditComponent, NewComponent],
  imports: [
    CommonModule,
    SpeakersRoutingModule
  ],
  providers: [ SpeakersService ]
})
export class SpeakersModule { }
