import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes.service'; 
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  id1:any;
  data: Array<any>=[]; 

  constructor(private route:ActivatedRoute, private router:Router,private recipe:RecipeService) { 
  this.id1=this.route.params.subscribe((res:any)=>{
    console.log(res);
   this.recipe.getRecipe(res.id).subscribe((res:any)=>{
 
     console.log(res.hits);
       this.data=res.hits;
     })
   

 });

}
  ngOnInit(): void {
  }
  searchrecipe(id:string){
    
    this.router.navigate(["/recipe",id.split("#")[1]]);
  } 

}
