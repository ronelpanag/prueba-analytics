import { Speaker } from 'src/app/shared/models/speaker';
import { Component, OnInit } from '@angular/core';
import { SpeakersService } from '../speakers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  public files: File[] = [];
  public speaker = new Speaker();

  constructor(private speakerService: SpeakersService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async onSelect(data: File[]) {
    const image = await this.toBase64(data[0]);
    console.log(image);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  })

  createSpeaker() {
    this.speakerService.createSpeaker(this.speaker)
      .subscribe(data => {
        this.router.navigateByUrl('/speakers');
      });
  }

}
