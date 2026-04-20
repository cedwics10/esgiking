import {User} from "./user.interface";
import {IngredientQuantity, Recipe} from "./recipe.interface";
import {Ingredient} from "./ingredient.interface";

export interface RecipesQuantity {
    recipe: string | Recipe;
    quantity: number;
}

export interface Consume {
    _id: string;
    user: string | User;
    recipes: RecipesQuantity[];
    from: Date;
    to: Date;
}