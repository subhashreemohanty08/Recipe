import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
     path : '' , 
     component : MaincontentComponent
    },
    {
      path:"card/:id",
      component:NavbarComponent 
    },
  
  { 
    path : 'recipe/:id' , 
    component : RecipeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }

  