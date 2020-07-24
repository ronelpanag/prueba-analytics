import { CountryService } from './services/country.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TalkCardComponent } from './components/talk-card/talk-card.component';
import { BaseHttpService } from './framework/base-http.service';
import { NgRatingBarModule } from 'ng-rating-bar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { CountryInputComponent } from './components/country-input/country-input.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomDropzonePreviewComponent } from './components/custom-dropzone-preview/custom-dropzone-preview.component';


@NgModule({
  declarations: [TalkCardComponent, ImageUploaderComponent, CountryInputComponent, CustomDropzonePreviewComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NgRatingBarModule,
    NgxDropzoneModule,
    TypeaheadModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MDBBootstrapModule,
    TalkCardComponent,
    NgRatingBarModule,
    NgxDropzoneModule,
    ImageUploaderComponent,
    TypeaheadModule,
    CountryInputComponent
  ],
  providers: [BaseHttpService, CountryService]
})
export class SharedModule { }
