import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RecipeService } from '../recipes.service'; 
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  id1: any;
  data: any;
  constructor(private router:Router,private recipe:RecipeService, private route: ActivatedRoute) {
    this.id1=this.route.snapshot.paramMap.get("id");
    
   }

  ngOnInit(): void {
    this.recipe.getRecipeByName(this.id1).subscribe((res:any)=>{
      
      this.data=res;
      console.log("food" +this.data)
    })
  }

}
