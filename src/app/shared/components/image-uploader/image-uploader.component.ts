import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  public files: File[] = [];
  public fileTypeAccepted = 'image/*';

  @Output() fileSelected = new EventEmitter<File[]>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);

    this.fileSelected.emit(this.files);
  }
}
