import { Component } from '@angular/core';

export interface ICardValue {
  name: string;
  brewery_type: string;
  street: string;
  phone: string;
  website_url?: string;
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards: ICardValue[] = [
    {
      name: 'string',
      brewery_type: 'string',
      street: 'string',
      phone: 'string',
      website_url: 'string',
    },
  ];
  constructor() {}
}
