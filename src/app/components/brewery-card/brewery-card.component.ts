import { Component, Input, OnInit } from '@angular/core';
import { ICardValue } from 'src/app/home/home.page';

@Component({
  selector: 'app-brewery-card',
  templateUrl: './brewery-card.component.html',
  styleUrls: ['./brewery-card.component.scss'],
})
export class BreweryCardComponent implements OnInit {
  @Input() cardData: ICardValue;

  constructor() {}

  ngOnInit() {}
}
