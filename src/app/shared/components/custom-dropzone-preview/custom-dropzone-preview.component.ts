import { Component, OnInit } from '@angular/core';
import { NgxDropzonePreviewComponent } from 'ngx-dropzone';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-custom-dropzone-preview',
  template: `
    <img [src]="imageSrc" />
    <ng-content select="ngx-dropzone-label"></ng-content>
    <ngx-dropzone-remove-badge *ngIf="removable" (click)="_remove($event)">
    </ngx-dropzone-remove-badge>
	`,
  styleUrls: ['./custom-dropzone-preview.component.scss'],
  providers: [
    {
      provide: NgxDropzonePreviewComponent,
      useExisting: CustomDropzonePreviewComponent
    }
  ]
})
export class CustomDropzonePreviewComponent extends NgxDropzonePreviewComponent implements OnInit {

  constructor(
    sanitizer: DomSanitizer
  ) {
    super(sanitizer);
  }

  /** The image data source. */
  imageSrc: string | ArrayBuffer = '';

  ngOnInit() {
    this.readFile()
      .then(img => setTimeout(() => this.imageSrc = img))
      .catch(err => console.error(err));
  }
}
