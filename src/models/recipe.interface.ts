import {User} from "./user.interface";
import {Ingredient} from "./ingredient.interface";

export interface IngredientQuantity {
    ingredient: string | Ingredient;
    quantity: number;
}

export interface Recipe {
    _id: string;
    creator: string | User;
    alcoholLevel: number;
    name: string;
    description: string;
    ingredients: IngredientQuantity[];
}