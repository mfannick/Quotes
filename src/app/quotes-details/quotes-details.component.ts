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
  count=0;
  // line(){
  //   let first=0;
  //   let last=0;
    
  //   for(this.count=0,this.count<=this.quotes.length,this.count++){
  //         if(last>0){
  //              first=last
  //         }
  //   }
  // }
  like=0
  dislike=0
  
  liked(){
    
    var like=this.like
    this.like=this.like+1
    
    if(like>2){
      alert('yes')
         }

  }
  disliked(){
    this.dislike=this.dislike+1
   
  }

  
 constructor(){}

 ngOnInit() {
}


};
