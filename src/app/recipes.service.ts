import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http:HttpClient) { 
  }
  
   getRecipe(id:string){
    return this.http.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${id}&app_id=5cb53c5e&app_key=a7fd21177e9ff88e218ea0170b83a293`);
  }

 
  getRecipeByName(id:string){
    return this.http.get(`https://api.edamam.com/search?app_id=5cb53c5e&app_key=a7fd21177e9ff88e218ea0170b83a293&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${id}`);
  }
  } 
