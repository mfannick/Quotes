import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { QuotesClass } from '../quotes-class';


@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  
  @Input() quote:QuotesClass;
  @Output() quotesDeleted=new EventEmitter<boolean>()

  deleteQuoteDetail(deletequote:boolean){

      this.quotesDeleted.emit(deletequote)
  }
  
 constructor(){}

 ngOnInit() {
}


};
