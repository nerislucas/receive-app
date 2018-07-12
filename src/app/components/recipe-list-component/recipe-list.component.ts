import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipeForm: Recipe;
  loadingRecipes: boolean;


  constructor(private router: Router
    , private recipeService: RecipeService) {
    this.recipeForm = Recipe.getEmptyRecipe();
  }

  ngOnInit(): void {
    this.recipeService.getAll().then(recipes => {
      this.recipes = recipes;
      this.loadingRecipes = true;
    });
  }

  addRecipe() {
    this.recipes.push(this.recipeForm);
    this.recipeForm = Recipe.getEmptyRecipe();
  }

  zoomIn(recipe) {
    console.log('recipe: ', JSON.stringify(recipe));
  }

  userClickOnRecipe(id) {
    this.router.navigateByUrl(`/recipes/${id}`);
  }

  onCreate() {
    this.router.navigateByUrl('/recipes/new');
  }
}
