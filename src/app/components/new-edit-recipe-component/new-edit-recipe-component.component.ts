import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-new-edit-recipe-component',
  templateUrl: './new-edit-recipe-component.component.html',
  styleUrls: ['./new-edit-recipe-component.component.css']
})
export class NewEditRecipeComponentComponent implements OnInit {
  recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
