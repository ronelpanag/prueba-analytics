import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collection = [];
  constructor() { }

  ngOnInit(): void {
    this.collection = [
      {className: 'card1 custom-card'},
      {className: 'card2 custom-card'},
      {className: 'card3 custom-card'},
    ]
  }

}
