import { Component, OnInit } from '@angular/core';
import { SpeakersService } from './../speakers.service';
import { Speaker } from 'src/app/shared/models/speaker';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public speakers: Speaker[] = [
    {firstName: 'Ronel', lastName: 'Pantaleon', image: 'https://avatars0.githubusercontent.com/u/40268531?v=4'},
    {firstName: 'Raymond', lastName: 'Coplin', image: 'https://avatars0.githubusercontent.com/u/4911690?v=4'},
    {firstName: 'Samir', lastName: 'Mendez', image: 'https://avatars2.githubusercontent.com/u/37009046?v=4'},
    {firstName: 'Raymond', lastName: 'Coplin', image: 'https://avatars0.githubusercontent.com/u/4911690?v=4'},
    {firstName: 'Samir', lastName: 'Mendez', image: 'https://avatars2.githubusercontent.com/u/37009046?v=4'},
    {firstName: 'Ronel', lastName: 'Pantaleon', image: 'https://avatars0.githubusercontent.com/u/40268531?v=4'},
    {firstName: 'Samir', lastName: 'Mendez', image: 'https://avatars2.githubusercontent.com/u/37009046?v=4'},
    {firstName: 'Ronel', lastName: 'Pantaleon', image: 'https://avatars0.githubusercontent.com/u/40268531?v=4'},
    {firstName: 'Raymond', lastName: 'Coplin', image: 'https://avatars0.githubusercontent.com/u/4911690?v=4'},
    {firstName: 'Ronel', lastName: 'Pantaleon', image: 'https://avatars0.githubusercontent.com/u/40268531?v=4'},
    {firstName: 'Samir', lastName: 'Mendez', image: 'https://avatars2.githubusercontent.com/u/37009046?v=4'},
    {firstName: 'Raymond', lastName: 'Coplin', image: 'https://avatars0.githubusercontent.com/u/4911690?v=4'},
  ];

  constructor(private speakerService: SpeakersService) { }

  ngOnInit() {
    // this.getSpeakers();
  }

  getSpeakers() {
    this.speakerService.getSpeakers()
      .subscribe(data => {
        this.speakers = data;
      });
  }

}
