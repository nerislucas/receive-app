import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeListComponentComponent } from './components/recipe-list-component/recipe-list-component.component';
import { RecipeSummaryComponentComponent } from './components/recipe-summary-component/recipe-summary-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponentComponent,
    RecipeSummaryComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
