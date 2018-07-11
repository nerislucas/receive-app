import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-summary-component',
  templateUrl: './recipe-summary-component.component.html',
  styleUrls: ['./recipe-summary-component.component.css']
})
export class RecipeSummaryComponentComponent {
  @Input()
  recipe: Recipe;

  @Output()
  zoomIn: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  @Output()
  userClick: EventEmitter<number> = new EventEmitter<number>();

  zoomClicked() {
    this.zoomIn.emit(this.recipe);
  }

  userClicked() {
    this.userClick.emit(this.recipe.id);
  }
}
