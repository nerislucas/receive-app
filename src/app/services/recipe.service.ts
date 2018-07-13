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
      .then(response => response.json().data as Recipe[])
      .catch(error => this.handleError(error));
  }

  getById(id: number): Promise<Recipe> {
    return this.http
      .get(`${this.urlServerRecipe}/v1/recipes/${id}.json`)
      .toPromise()
      .then(response => response.json().data as Recipe)
      .catch(error => this.handleError(error));
  }

  upsert(recipe: Recipe): Promise<Recipe> {
    return this.http
      .put(`${this.urlServerRecipe}/v1/recipes.json`, recipe)
      .toPromise()
      .then(response => response.json().data as Recipe)
      .catch(error => this.handleError(error));
  }

  private handleError(error: any): Promise<any> {
    console.log(`ERROR OCURRED TALKING TO SERVER: ${error}`);
    return Promise.reject(error.message || error);
  }
}
