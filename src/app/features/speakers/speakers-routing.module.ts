import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '../speakers/list/list.component';
import { DetailsComponent } from '../speakers/details/details.component';
import { NewComponent } from '../speakers/new/new.component';
import { EditComponent } from '../speakers/edit/edit.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: '/:id', component: DetailsComponent },
  { path: 'new', component: NewComponent },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
