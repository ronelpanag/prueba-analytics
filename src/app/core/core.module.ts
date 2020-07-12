import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


const declarations = [
  NotFoundComponent,
  HeaderComponent,
  FooterComponent
]
@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ ...declarations ]
})
export class CoreModule { }
