import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable()
export class RecipesServices {

    recipeSelected = new Subject<Recipe>();


    private recipes: Recipe[] = [
        new Recipe('spaguetti',
            'This a recipe of spaguetti',
            'https://www.laespanolaaceites.com/wp-content/uploads/2019/05/espaguetis-a-la-bolonesa-1080x671.jpg',
            [
                new Ingredient('Pasta', 1),
                new Ingredient('Salta de tomate', 1),
            ]),
        new Recipe('salmon',
            'This a recipe of salmon',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBayUSw23Qu2aMnhQixZXZzG8AU6iMMltk4g&usqp=CAU',
            [
                new Ingredient('Cola de salmón', 1),
                new Ingredient('Perejil', 1),
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }
    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}