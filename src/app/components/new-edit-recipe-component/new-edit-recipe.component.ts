import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe, Ingredient, Instruction } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-new-edit-recipe-component',
  templateUrl: './new-edit-recipe.component.html',
  styleUrls: ['./new-edit-recipe.component.css']
})
export class NewEditRecipeComponent implements OnInit {
  recipe: Recipe;

  constructor(private recipeService: RecipeService
    , private router: Router) { }

  newOrEdit() {
    this.recipe = Recipe.getEmptyRecipe();
    this.recipe.ingredients = new Array<Ingredient>();
    this.recipe.instructions = new Array<Instruction>();
  }

  ngOnInit() {
    this.newOrEdit();
  }

  onAddIngredient() {
    const ingredient = {} as Ingredient;
    this.recipe.ingredients.push(ingredient);
  }

  onRemoveIngredient(index) {
    this.recipe.ingredients.splice(index, 1);
  }

  onAddInstruction() {
    const instruction = {} as Instruction;
    this.recipe.instructions.push(instruction);
  }

  onRemoveInstruction(index) {
    this.recipe.instructions.splice(index, 1);
  }

  saveRecipe() {
    this.recipeService
      .upsert(this.recipe)
      .then(recipe => {
        if (recipe) {
          this.router.navigateByUrl(`recipes/${recipe.id}`);
        }
      });
  }
}
