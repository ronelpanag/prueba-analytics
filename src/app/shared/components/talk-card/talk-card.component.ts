import { Component, OnInit, Input } from '@angular/core';
import { Talk } from './../../models/talk';

@Component({
  selector: 'app-talk-card',
  templateUrl: './talk-card.component.html',
  styleUrls: ['./talk-card.component.scss']
})
export class TalkCardComponent implements OnInit {

  public url = '';

  @Input() item: Talk;

  constructor() { }

  ngOnInit(): void {
    this.item = {
      name: 'Google Analytics',
      description: 'Charla basada en como la analitica web resulta beneficiosa para el Negocio y los Desarrolladores',
      speaker: '',
      community: 'GDG / DSC UNAPEC',
      id: 1,
      rating: 4.5
    };
    this.url = `/talks/detail/${this.item.id}`;
  }
}
