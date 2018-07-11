import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeListComponentComponent } from './components/recipe-list-component/recipe-list-component.component';
import { RecipeSummaryComponentComponent } from './components/recipe-summary-component/recipe-summary-component.component';
import { RecipeDetailsComponentComponent } from './components/recipe-details-component/recipe-details-component.component';
import { NewEditRecipeComponentComponent } from './components/new-edit-recipe-component/new-edit-recipe-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponentComponent,
    RecipeSummaryComponentComponent,
    RecipeDetailsComponentComponent,
    NewEditRecipeComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'recipes',
          component: RecipeListComponentComponent
        },
        {
          path: 'recipes/new',
          component: NewEditRecipeComponentComponent
        },
        {
          path: 'recipes/:id',
          component: RecipeDetailsComponentComponent
        },
        {
          path: '',
          redirectTo: '/recipes',
          pathMatch: 'full'
        }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
