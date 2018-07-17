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
    , private formBuilder: FormBuilder) {
  }

  loadRecipe() {
    if (!this.recipe || !this.recipe.ingredients) {
      this.recipe = Recipe.getEmptyRecipe();
      this.recipe.ingredients = new Array<Ingredient>();
    }
  }

  loadFormGroup() {
    const group = {
      title: ['', Validators.required],
      description: ['', Validators.required],
      preparationTime: ['', Validators.required],
      feedsMany: ['', Validators.required]
      ingredients: this.formBuilder.array(
    };


    for (let index = 0; index < this.recipe.ingredients.length; index++) {
      const ingredient = 'ingredient' + index;
      const meaasure = 'measure' + index;

      group[ingredient] = ['', [Validators.required]];
      group[meaasure] = [this.recipeForm.value[meaasure], [Validators.required]];
    }

    // for (let index = 0; index < this.recipe.instructions.length; index++) {
    //   group['instruction' + index] = [this.recipe.instructions[index].instruction, [Validators.required]];
    // }

    this.recipeForm = this.formBuilder.group(group);

    if (this.recipe) {
      this.recipeForm.patchValue(this.recipe);
    }
  }

  ngOnInit() {
    this.loadFormGroup();
  }

  onAddIngredient() {
    if(!this.recipe){
      this.recipe = new Recipe();
    }

    let r = this.recipeForm.value;

    for (const v in r.ingredients.length) {
      r.addIntegredient({
        r.ingredients[v].field
      })
    }


    const ingredient = {} as Ingredient;
    this.recipe.ingredients.push(ingredient);
    
    
    this.loadFormGroup();
  }

  onRemoveIngredient(index) {
    this.recipe.ingredients.splice(index, 1);
    console.log('this.recipe.ingredients', this.recipe.ingredients);
    this.loadFormGroup();
  }

  onAddInstruction() {
    const instruction = {} as Instruction;
    this.recipe.instructions.push(instruction);
  }

  onRemoveInstruction(index) {
    this.recipe.instructions.splice(index, 1);
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
