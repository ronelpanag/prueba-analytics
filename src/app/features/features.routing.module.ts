import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'communities',
    loadChildren: () => import('./communities/communities.module').then(m => m.CommunitiesModule)
  },
  {
    path: 'speakers',
    loadChildren: () => import('./speakers/speakers.module').then(m => m.SpeakersModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./talks/talks.module').then(m => m.TalksModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
