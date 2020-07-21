import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public items = [
    { name: 'Comunidades', link: '/communities' },
    { name: 'Eventos', link: '/talks' },
    { name: 'Charlistas', link: '/speakers' },
    { name: 'Sobre mi', link: '/about' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
