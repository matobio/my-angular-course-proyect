import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model'
import { RecipesServices } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];


  constructor(private recipeService: RecipesServices) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }


}
