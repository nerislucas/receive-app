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

  zoomClicked() {
    this.zoomIn.emit(this.recipe);
  }
}
