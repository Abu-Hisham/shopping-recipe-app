import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { EventListener } from "@angular/core/src/debug/debug_node";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
       private ingredients: Ingredient[] = [
        new Ingredient('Apples', 10),
        new Ingredient('Tomatoes', 10),
      ];

      getIngredients(){
          return this.ingredients.slice();
      }
      addIngredient(ingredient: Ingredient){
          this.ingredients.push(ingredient);
          this.ingredientsChanged.emit(this.ingredients.slice())
      }
}