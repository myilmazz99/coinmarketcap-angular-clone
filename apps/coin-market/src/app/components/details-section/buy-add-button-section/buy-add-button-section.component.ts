import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coin-market-buy-add-button-section',
  templateUrl: './buy-add-button-section.component.html',
  styleUrls: ['./buy-add-button-section.component.scss']
})
export class BuyAddButtonSectionComponent implements OnInit {

  //isDisplayBuy = false;
  isDisplayCrypto = false;
  isDisplayExchange = false;
  isDisplayGaming = false;
/*
  buyDisplay(){
    this.isDisplayBuy = !this.isDisplayBuy;
  } */

  cryptoDisplay(){
    this.isDisplayCrypto = !this.isDisplayCrypto;
  }

  exchangeDisplay(){
    this.isDisplayExchange = !this.isDisplayExchange;
  }

  gamingDisplay(){
    this.isDisplayGaming = !this.isDisplayGaming;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
