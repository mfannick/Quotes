import { Component, OnInit } from '@angular/core';
import { QuotesClass } from '../quotes-class';

@Component({
  selector: 'app-display-quotes',
  templateUrl: './display-quotes.component.html',
  styleUrls: ['./display-quotes.component.css']
})
export class DisplayQuotesComponent implements OnInit {
  
  quotes:QuotesClass []=[
    new QuotesClass(1,'Write your quote','author name',new Date(2019,1,1))
  ];
  constructor() { }

  ngOnInit() {
  };

     
  };


