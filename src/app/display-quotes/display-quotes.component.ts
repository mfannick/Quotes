import { Component, OnInit } from '@angular/core';
import { QuotesClass } from '../quotes-class';

@Component({
  selector: 'app-display-quotes',
  templateUrl: './display-quotes.component.html',
  styleUrls: ['./display-quotes.component.css']
})
export class DisplayQuotesComponent implements OnInit {
  
  quotes:QuotesClass []=[
    new QuotesClass(1,'Write your quote','author name','The person who submitted the quote',new Date(2019,1,1))
  ];
  toggleDetails(index){
     this.quotes[index].showDetails=!this.quotes[index].showDetails
  }
  constructor() { }

  ngOnInit() {
  };

     
  };


