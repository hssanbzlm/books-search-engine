import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [   
  {path:"result/:key",component:ResultComponent},  
  {path:"search",component:SearchComponent},
  {path:"",component:SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
