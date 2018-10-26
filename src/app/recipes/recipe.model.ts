import { Ingredient } from "../shared/ingredient.model";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;

    }
}