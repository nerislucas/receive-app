import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrls: ['./recipe-list-component.component.css']
})
export class RecipeListComponentComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [new Recipe('Banana Bread', 'This is my fabourite banana bread recipe!' +
      'My mother taught me how to make this one warm summer afternoon', null, null, null),
    new Recipe('Homestead Tofu', 'This is a dish from rural Hunan province in China' +
      'and has tofu, some flavouring, and lots of chili peppers', null, null, null)];
  }

}
