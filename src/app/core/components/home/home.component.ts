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
      {className: 'card1 customCard'},
      {className: 'card2 customCard'},
      {className: 'card3 customCard'},
    ]
  }

}
