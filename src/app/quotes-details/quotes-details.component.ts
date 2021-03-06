import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuotesClass } from '../quotes-class';


@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quote: QuotesClass;
  @Output() quotesDeleted = new EventEmitter<boolean>()

  deleteQuoteDetail(deletequote: boolean) {

    this.quotesDeleted.emit(deletequote)
  }
  count = 0


  like = 0
  dislike = 0

  liked() {

    this.like = this.like + 1
  }
  disliked() {
    this.dislike = this.dislike + 1

  }


  constructor() { }

  ngOnInit() {
  }


};
