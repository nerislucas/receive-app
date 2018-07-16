import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Recipe, Ingredient, Instruction } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-new-edit-recipe-component',
  templateUrl: './new-edit-recipe.component.html',
  styleUrls: ['./new-edit-recipe.component.css']
})
export class NewEditRecipeComponent implements OnInit {
  recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private recipeService: RecipeService
    , private router: Router
    , private formBuilder: FormBuilder) { }

  loadFormGroup() {
    if (!this.recipe || !this.recipe.ingredients) {
      this.recipe = Recipe.getEmptyRecipe();
      this.recipe.ingredients = new Array<Ingredient>();
    }

    const group = {
      title: [this.recipe.title, Validators.required],
      description: [this.recipe.description, Validators.required],
      preparationTime: [this.recipe.preparationTime, Validators.required],
      feedsMany: [this.recipe.feedsMany, Validators.required]
    };

    for (let index = 0; index < this.recipe.ingredients.length; index++) {
      group['ingredient' + index] = [this.recipe.ingredients[index].ingredient, [Validators.required]];
      group['measure' + index] = [this.recipe.ingredients[index].measure, [Validators.required]];
    }

    // for (let index = 0; index < this.recipe.instructions.length; index++) {
    //   group['instruction' + index] = [this.recipe.instructions[index].instruction, [Validators.required]];
    // }

    this.recipeForm = this.formBuilder.group(group);
  }

  ngOnInit() {
    this.loadFormGroup();
  }

  onAddIngredient() {
    const ingredient = {} as Ingredient;
    this.recipe.ingredients.push(ingredient);
    this.loadFormGroup();
  }

  onRemoveIngredient(index) {
    this.recipe.ingredients.splice(index, 1);
    this.loadFormGroup();
  }

  onAddInstruction() {
    const instruction = {} as Instruction;
    this.recipe.instructions.push(instruction);
    this.loadFormGroup();
  }

  onRemoveInstruction(index) {
    this.recipe.instructions.splice(index, 1);
    this.loadFormGroup();
  }

  saveRecipe() {
    console.log('this.recipeForm.value', this.recipeForm.value);
    console.log('this.recipeForm.status', this.recipeForm.invalid);
    // this.recipeService
    //   .upsert(this.recipe)
    //   .then(recipe => {
    //     if (recipe) {
    //       this.router.navigateByUrl(`recipes/${recipe.id}`);
    //     }
    //   });
  }
}
