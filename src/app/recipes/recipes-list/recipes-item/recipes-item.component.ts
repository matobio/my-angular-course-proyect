import { TitleCasePipe } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipesServices } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesServices) { }

  ngOnInit(): void {
  }

  onSelectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
