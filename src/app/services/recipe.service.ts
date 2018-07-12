import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Recipe } from '../models/recipe';

@Injectable()
export class RecipeService {
  private readonly urlServerRecipe: string = 'http://localhost:8080';

  constructor(private http: Http) { }

  getAll(): Promise<Recipe[]> {
    return this.http
      .get(`${this.urlServerRecipe}/v1/recipes.json`)
      .toPromise()
      .then(response => response.json().data as Recipe[]);
  }

  getById(id: number): Promise<Recipe> {
    return this.http
      .get(`${this.urlServerRecipe}/v1/recipes/${id}.json`)
      .toPromise()
      .then(response => response.json().data as Recipe);
  }

  upsert(recipe: Recipe): Promise<Recipe> {
    return this.http
      .put(`${this.urlServerRecipe}/v1/recipes.json`, recipe)
      .toPromise()
      .then(response => response.json().data as Recipe);
  }
}
