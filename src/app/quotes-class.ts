export class QuotesClass {
    showDetails:boolean
    constructor(public id:number,public quotesWritten:string,public authorName:string,public submitPerson:string,public writtenDate:Date,public like:number,public dislike:number){
        this.showDetails=false;
        
    }

}
