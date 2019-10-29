export class Book { 

    title:string;
    subtitle:string; 
    description:string;
    pageCount:number;
    id:string;
    authors:Array<string>;
    categories:string[];
    publishedDate:string;
    img:string;
    language:string;


        
    /**
     *
     */
    constructor(title:string,description:string,pageCount:number,subtitle:string,id:string,authors:Array<string>,categories:Array<string>,publishedDate:string,img:string,language:string) { 

        this.subtitle=subtitle;
        this.title=title;
        this.id=id;
        this.authors=authors;
        this.img=img;
        this.language=language;
        this.categories=categories;
        this.publishedDate=publishedDate;
        this.description=description;
        this.pageCount=pageCount;
        
        
    } 

    /**
     *
     */
    
        
}
