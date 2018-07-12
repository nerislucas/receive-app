import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details-component',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  loadingRecipe: boolean;

  constructor(private activedRoute: ActivatedRoute
    , private location: Location
    , private recipeService: RecipeService) { }

  ngOnInit() {
    this.activedRoute.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id'), 10);
      this.recipeService.getById(id).then(recipe => {
        this.recipe = recipe;
        this.loadingRecipe = true;
      });
    });
  }

  goBack() {
    this.location.back();
  }
}
