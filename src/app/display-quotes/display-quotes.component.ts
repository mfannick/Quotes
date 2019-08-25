import { Component, OnInit } from '@angular/core';
import { QuotesClass } from '../quotes-class';

@Component({
  selector: 'app-display-quotes',
  templateUrl: './display-quotes.component.html',
  styleUrls: ['./display-quotes.component.css']
})
export class DisplayQuotesComponent implements OnInit {

  quotes: QuotesClass[] = [
    new QuotesClass(1, 'When asked ,"What is more important:Praying or reading the Bible?" I ask "What is more important:Breathing in or out?"', 'Charles Spergeon', 'Annick', new Date(2019, 1, 1),0,0)
  
  ];
  
//   count=0
//  line(){
  
//     let first=0;
//     let last=0;
    
//     for(this.count=0;this.count<=this.quotes.length;this.count++){
//           if(first>0){
//                first=last
//           }
//           return first
//     }
    
//   }
  
  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails
  }
  deleteQuote(quotesDeleted, index) {
    if (quotesDeleted) {
      let deleted = confirm('Are you sure you want to delete')
      if (deleted) {
        this.quotes.splice(index, 1)
      }

    }
  }
 
  quotesAdded(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.writtenDate = new Date(quote.writtenDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  };


};


