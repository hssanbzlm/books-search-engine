import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 

  key:string=""; 
  constructor(private router:Router) { }
 


  ngOnInit() {
  } 

  onClick()
  {   if(this.key && this.key.trim())
    { console.log()
    this.router.navigateByUrl("result/"+this.key);
  }
     else 
     return 0;
  
  }

}
