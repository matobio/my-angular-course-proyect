import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('spaguetti', 'This a recipe of spaguetti', 'https://www.laespanolaaceites.com/wp-content/uploads/2019/05/espaguetis-a-la-bolonesa-1080x671.jpg'),
    new Recipe('salmon', 'This a recipe of salmon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBayUSw23Qu2aMnhQixZXZzG8AU6iMMltk4g&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
