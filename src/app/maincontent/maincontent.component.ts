import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipes.service';  
@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  recipe1:string="";
  constructor(private recipes:RecipeService,private router:Router) { }

  ngOnInit(): void {
  }
  recipeSearch(){
    console.log(this.recipe1);    
    this.router.navigate(['card',this.recipe1]);
  }

}
