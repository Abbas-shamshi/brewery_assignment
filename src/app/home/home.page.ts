import { Component, OnInit } from '@angular/core';
import { GetBreweryDataService } from '../services/get-brewery-data.service';

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
export class HomePage implements OnInit {
  cards: ICardValue[] = [];
  constructor(private getBreweryData: GetBreweryDataService) {}
  ngOnInit() {
    this._getBrewData();
  }

  private _getBrewData() {
    this.getBreweryData.getData().subscribe((data: ICardValue[]) => {
      this.cards = [];
      data.map((cardData: ICardValue) => {
        const card = {
          name: cardData.name,
          brewery_type: cardData.brewery_type,
          street: cardData.street,
          phone: cardData.phone,
          website_url: cardData.website_url,
        };
        this.cards.push(card);
      });
    });
  }
}
