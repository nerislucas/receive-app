import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeListComponent } from './components/recipe-list-component/recipe-list.component';
import { RecipeSummaryComponent } from './components/recipe-summary-component/recipe-summary.component';
import { RecipeDetailsComponent } from './components/recipe-details-component/recipe-details.component';
import { NewEditRecipeComponent } from './components/new-edit-recipe-component/new-edit-recipe.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeSummaryComponent,
    RecipeDetailsComponent,
    NewEditRecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path: 'recipes',
          component: RecipeListComponent
        },
        {
          path: 'recipes/new',
          component: NewEditRecipeComponent
        },
        {
          path: 'recipes/:id',
          component: RecipeDetailsComponent
        },
        {
          path: '',
          redirectTo: '/recipes',
          pathMatch: 'full'
        }
      ])
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
