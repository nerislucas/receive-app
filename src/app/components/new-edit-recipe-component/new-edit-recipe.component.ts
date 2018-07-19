import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

import { Recipe, Ingredient, Instruction } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-new-edit-recipe-component',
  templateUrl: './new-edit-recipe.component.html',
  styleUrls: ['./new-edit-recipe.component.css']
})
export class NewEditRecipeComponent implements OnInit {
  recipeForm: FormGroup;
  ingredients: any[] = [];

  constructor(private recipeService: RecipeService
    , private router: Router
    , private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loadControls();
  }

  loadControls() {
    const group = {
      title: ['', Validators.required],
      description: ['', Validators.required],
      preparationTime: ['', Validators.required],
      feedsMany: ['', Validators.required],
      ingredients: this.formBuilder.array([])
    };

    this.recipeForm = this.formBuilder.group(group);
  }

  loadControlIngredient(): FormGroup {
    return this.formBuilder.group({
      ingredient: ['', Validators.required],
      measure: ['', Validators.required]
    });
  }

  onAddIngredient() {
    const contractArray = <FormArray>this.recipeForm.controls['ingredients'];
    const newContract = this.loadControlIngredient();
    contractArray.push(newContract);
  }

  onRemoveIngredient(index) {
    const contractsArray = <FormArray>this.recipeForm.controls['ingredients'];
    contractsArray.removeAt(index);
  }

  onAddInstruction() {
    // const instruction = {} as Instruction;
    // this.recipe.instructions.push(instruction);
  }

  onRemoveInstruction(index) {
    // this.recipe.instructions.splice(index, 1);
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
