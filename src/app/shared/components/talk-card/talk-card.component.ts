import { Component, OnInit, Input } from '@angular/core';
import { TalkItem } from '../../models/talk-item';

@Component({
  selector: 'app-talk-card',
  templateUrl: './talk-card.component.html',
  styleUrls: ['./talk-card.component.scss']
})
export class TalkCardComponent implements OnInit {

  public id = 0;
  public communityName = '';
  public talkName = '';
  public speakerName = '';
  public rating = 0;

  @Input() item: TalkItem;

  constructor() { }

  ngOnInit(): void {
  }

}
