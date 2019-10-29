import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleVolumeListResponse } from './google-volume-list-response';
import { Book } from './book';


@Injectable({
  providedIn: 'root'
})
export class BooksearchServiceService {

  constructor(private http:HttpClient) { } 




  getBooks(key:string):Observable<GoogleVolumeListResponse>
  {    
    var url="https://www.googleapis.com/books/v1/volumes?q="+key;

    return this.http.get<GoogleVolumeListResponse>(url);
  } 

   getBookbyId(id:string,books:Book[]):Book
   {    
     return books.find(b=>b.id==id);

   }  

   getAuthors(books:Book[]):Array<string>
   {   
        var authors:Array<string[]>=[]; 
        var separateAuthors:string[]=[];
        var j:number=0;
        for(var i=0;i<books.length;i++)
        {  
          if(books[i].authors!=null)
          {
          authors[j]=books[i].authors; 
          j++;
          }
        } 
         
         

        for(var i=0;i<authors.length;i++) //here , I put each category in table column to be able to exlude repetitive categories 
        { 
          for(var j=0;j<authors[i].length;j++)
          separateAuthors.push(authors[i][j])
        } 



        
  separateAuthors=[...new Set(separateAuthors)]

   return separateAuthors;

   } 

   getCategories(books:Book[]):Array<string>
   {   
        var categories:Array<string[]>=[];
        var separateCategories:string[]=[];
        var j:number=0;
        for(var i=0;i<books.length;i++)
        {    
          if(books[i].categories!=null)
          {
          categories[j]=books[i].categories; 
          j++;
          }
        }  
        
        
        for(var i=0;i<categories.length;i++) //here , I put each category in table column to be able to exlude repetitive categories 
        { 
          for(var j=0;j<categories[i].length;j++)
          separateCategories.push(categories[i][j])
        } 

  separateCategories=[...new Set(separateCategories)];



   return separateCategories;

   }
    

   getLanguages(book:Book[]):string[]
   {
      var languages:string[]=[];

        for(var i=0;i<book.length;i++)
        {
            
          if(book[i].language!=null)
          {
          languages.push(book[i].language);

          }
        } 
   

  return [...new Set(languages)];

   } 

   filter(books:Book[],authors:string,categories:string,language:string):Book[]
   {   
     var rslt:Book[]=[];
     
     if(authors!="default"&&(categories=="default"||categories==null)&&(language=="default"||language==null))  
     {  
        for(var i=0;i<books.length;i++)
        {    if(books[i].authors)
          {
          for(var j=0;j<books[i].authors.length;j++)
          { 
          if(books[i].authors[j]==authors)
          rslt.push(books[i]);
         
        } 
      }

        }  
      } 
      //////


        if(categories!="default"&&(language=="default"||language==null)&&(authors=="default"||authors==null))
        { 
         
          for(var i=0;i<books.length;i++)
        {    if(books[i].categories)
          {
          for(var j=0;j<books[i].categories.length;j++)
          { 
          if(books[i].categories[j]==categories)
          rslt.push(books[i]);  
        } 
        }
        }  
        } 

        /////


        if(language!="default"&&(categories=="default"||categories==null)&&(authors=="default"||authors==null))
        {  
          for(var i=0;i<books.length;i++)
        {    if(books[i].language==language)
             rslt.push(books[i]);  
        }  
        }   

        ////

        if(language!="default"&&(categories!="default"&&categories!=null)&&(authors=="default"||authors==null))
        {  
          for(var i=0;i<books.length;i++)
        {    if(books[i].language==language)
          if(books[i].categories)
          {
              for(var j=0;j<books[i].categories.length;j++) 
              {   if(books[i].categories[j]==categories)
                 {                 
             rslt.push(books[i]);
                     
                 }
              } 

            }///
        }  
        }   


        if((language!="default"&&language!=null)&&(categories=="default"||categories==null)&&(authors!="default"&&authors!=null))
        {  
          for(var i=0;i<books.length;i++)
        {    if(books[i].language==language) 
                if(books[i].authors!=null)
                {
              for(var j=0;j<books[i].authors.length;j++) 
              {   if(books[i].authors[j]==authors)
                 {                 
             rslt.push(books[i]);
                     
                 }
              } 
            }
              ///
              
        }   
        }  
     

        if((language=="default"||language==null)&&(categories!="default"&&categories!=null)&&(authors!="default"&&authors!=null))
        {  
          for(var i=0;i<books.length;i++)
        {    if(books[i].authors!=null)
          {
              for(var j=0;j<books[i].authors.length;j++) 
              {   if(books[i].authors[j]==authors)
                 {  
                   if(books[i].categories!=null)
                   {  
                  for(var l=0;l<books[i].categories.length;l++)
                  { 
                    if(books[i].categories[l]==categories)
                    {
             rslt.push(books[i]);
                    }
                  } 
                }
                 }
              }
            }
        }  
        }   
        ////



        if((language!="default"&&language!=null)&&(categories!="default"&&categories!=null)&&(authors!="default"&&authors!=null))
        { 
          for(var i=0;i<books.length;i++)
        {    if(books[i].language==language) 
          {
          
              if(books[i].authors!=null)
          {
              for(var j=0;j<books[i].authors.length;j++) 
              {   if(books[i].authors[j]==authors)
                 {  
                   if(books[i].categories!=null)
                   {
                  for(var l=0;l<books[i].categories.length;l++)
                  { 
                    if(books[i].categories[l]==categories)
                    {
             rslt.push(books[i]);
                    }
                  } 
                }
                 }
              }
            }
          }
        }   
        }   
        
        if((categories=="default"||categories==null) &&(authors=="default"||authors==null)&&(language=="default"||language==null) )
        {
          return books;
        }








        return rslt;
        }   


        
        



     
     


      

   
  
   Mapping(data:GoogleVolumeListResponse):Book[]
   { 
        
  var authors:Array<string>;
  var categories:Array<string>;
  var b:Book=new Book("","",0,"","",authors,categories,"","","");//initialization  
  var books:Book[]=[];
  for(var i=0;i<data.items.length;i++)
            {   
              if(data.items[i].volumeInfo.imageLinks==null)
                b.img="assets/img/not-found.png"; 
                else
              {b.img=data.items[i].volumeInfo.imageLinks.thumbnail;}
              b.authors=data.items[i].volumeInfo.authors;
              b.categories=data.items[i].volumeInfo.categories;
              b.language=data.items[i].volumeInfo.language;
              b.publishedDate=data.items[i].volumeInfo.publishedDate; 
              b.title=data.items[i].volumeInfo.title;
              b.id=data.items[i].id;   
              b.subtitle=data.items[i].volumeInfo.subtitle;
              b.description=data.items[i].volumeInfo.description;
              b.pageCount=data.items[i].volumeInfo.pageCount;
              books.push(b); 
              b=new Book("","",0,"","",authors,categories,"","","");
              


            } 

 return books;


    



   }



}
