import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('name')name = ""
  @Input('capital')capital = ""
  @Input('region')region = ""
  @Input('Population')Population = ""
  @Input('subregion')subregion=""
  @Input('flag')flag=""
  @Input('currencies')currencies= []
  @Input('languages')languages = []

  currency:any[]=[]
  language:any[]=[]


  
  constructor() {
    
   }

  ngOnInit(): void {
    this.currency = this.currencies
    this.language = this.languages
  }

}
