import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent {
  recipes: Recipe[];
  recipeForm: Recipe;

  constructor() {
    this.recipeForm = Recipe.getEmptyRecipe();

    this.recipes = [new Recipe('Banana Bread', 'This is my fabourite banana bread recipe!' +
      'My mother taught me how to make this one warm summer afternoon', 2, 10, null, null, null),
    new Recipe('Homestead Tofu', 'This is a dish from rural Hunan province in China' +
      'and has tofu, some flavouring, and lots of chili peppers', 5, 15, null, null, null)];
  }

  addRecipe() {
    this.recipes.push(this.recipeForm);
    this.recipeForm = Recipe.getEmptyRecipe();
  }

  zoomIn(recipe) {
    console.log('recipe: ', JSON.stringify(recipe));
  }
}
