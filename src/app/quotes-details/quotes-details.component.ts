import { Component, OnInit,Input } from '@angular/core';
import { QuotesClass } from '../quotes-class';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote:QuotesClass;

  constructor() { }

  ngOnInit() {
  }

}
