import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-summary-component',
  templateUrl: './recipe-summary-component.component.html',
  styleUrls: ['./recipe-summary-component.component.css']
})
export class RecipeSummaryComponentComponent {
  @Input()
  recipe: Recipe;
}
