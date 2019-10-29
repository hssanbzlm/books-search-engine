import { Component, OnInit, Input } from '@angular/core';
import { BooksearchServiceService } from '../booksearch-service.service';
import { ActivatedRoute, Data } from '@angular/router';
import { Book } from '../book';
import { map } from 'rxjs/operators';
import { GoogleVolumeListResponse } from '../google-volume-list-response';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private service:BooksearchServiceService,private activatedroute:ActivatedRoute) { }  

  books:Book[]=[];  
  filterBooks:Book[]=[];
  authors:Array<string>;
  categories:Array<string>;
  languages:string[];
  b:Book=new Book("","",0,"","",this.authors,this.categories,"","","");//initialization
  response:GoogleVolumeListResponse[]=[];  
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  selectedId:string="";
  clickedBook:Book=new Book("","",0,"","xx",this.authors,this.categories,"","","");
  clicked:boolean=false;
  selectedAuthor:string;
  selectedCategorie:string;
  selectedLanguage:string;
  searched:boolean=false;



  

  @Input()page:number=1;
  @Input()pageSize:number=8;
  @Input()collectionSize:number; 
  
  

  ngOnInit() {   
    var key=this.activatedroute.snapshot.paramMap.get("key"); 
    this.getBooks(key); 

     
    

  } 

  getBooks(key:string)
  {  
      this.service.getBooks(key).pipe( 
        map( 
          
          data=> {   
            this.filterBooks=this.service.Mapping(data);  
            this.books=this.filterBooks;
            this.collectionSize=this.books.length;
            this.authors=this.service.getAuthors(this.books); 
            this.categories=this.service.getCategories(this.books);
            this.languages=this.service.getLanguages(this.books);
         
          }
            
           
            
        
        )

        
      ) .subscribe();  


    
  } 
  
  
  onClick(id:string) {  
    
    this.selectedId=id; 
    this.clickedBook=this.service.getBookbyId(this.selectedId,this.books);
    this.clicked=true;


  }  

  onChange()
  {  
    this.searched=false;
    this.filterBooks=this.service.filter(this.books,this.selectedAuthor,this.selectedCategorie,this.selectedLanguage)
    this.collectionSize=this.filterBooks.length;
    if(this.filterBooks.length==0) 
    {
      this.searched=true;
      
    }
  
  }


 




}
