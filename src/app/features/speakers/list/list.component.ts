import { Component, OnInit } from '@angular/core';
import { SpeakersService } from './../speakers.service';
import { Speaker } from 'src/app/shared/models/speaker';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public speakers: Speaker[] = [];

  constructor(private speakerService: SpeakersService) { }

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe(data => {
        this.speakers = data;
      });
  }

}
