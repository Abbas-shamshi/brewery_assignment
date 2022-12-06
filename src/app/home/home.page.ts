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
    this.getBrewData();
  }

  getBrewData(type?: string) {
    this.getBreweryData.getData(type).subscribe((data: ICardValue[]) => {
      this.cards = [];
      data.map((cardData: ICardValue) => {
        const card = {
          name: cardData.name,
          brewery_type: cardData.brewery_type,
          street: cardData.street,
          phone: this.formatPhoneNumber(cardData.phone),
          website_url: cardData.website_url,
        };
        this.cards.push(card);
      });
    });
  }

  selectType(event) {
    this.getBrewData(event.detail.value);
    console.log(event.detail.value);
  }

  formatPhoneNumber(phoneNumberString: string) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }
}
