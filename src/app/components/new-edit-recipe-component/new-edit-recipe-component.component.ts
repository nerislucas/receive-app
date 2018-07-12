import { Component, OnInit } from '@angular/core';
import { Recipe, Ingredient, Instruction } from '../../models/recipe';

@Component({
  selector: 'app-new-edit-recipe-component',
  templateUrl: './new-edit-recipe-component.component.html',
  styleUrls: ['./new-edit-recipe-component.component.css']
})
export class NewEditRecipeComponentComponent implements OnInit {
  recipe: Recipe;

  constructor() {

  }

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
    console.log(this.recipe);
  }
}
