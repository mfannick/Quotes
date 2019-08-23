export class QuotesClass {
    showDetails:boolean
    constructor(public id:number,public quotesWritten:string,public authorName:string,public submitPerson:string,public writtenDate:Date){
        this.showDetails=false;
    }
    // id:number;
    // quotesWritten:string;
    // WriterName:string;
}
