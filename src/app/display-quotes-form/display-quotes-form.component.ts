import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ QuotesClass} from '../quotes-class'
@Component({
  selector: 'app-display-quotes-form',
  templateUrl: './display-quotes-form.component.html',
  styleUrls: ['./display-quotes-form.component.css']
})
export class DisplayQuotesFormComponent implements OnInit {
    newQuote= new QuotesClass(0,'','','',new Date())
    @Output()newQuotesAdded=new EventEmitter<QuotesClass>()
    addToQuote(){
      this.newQuotesAdded.emit(this.newQuote)
    }
  constructor() { }

  ngOnInit() {
  }

}
