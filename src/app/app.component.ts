import { Component } from '@angular/core';
import { Receipe } from './models/receipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipe: Receipe;

  constructor() {
    this.recipe = new Receipe('Melon', 'This is my favourite melon bread recipe!', null, null, null);
  }
}
