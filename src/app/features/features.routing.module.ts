import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'feedbacks' },

  {
    path: 'feedbacks',
    loadChildren: () => import('./feedbacks/feedbacks.module').then(m => m.FeedbacksModule)
  },
  {
    path: 'speakers',
    loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
