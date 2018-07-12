import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditRecipeComponent } from './new-edit-recipe.component';

describe('NewEditRecipeComponent', () => {
  let component: NewEditRecipeComponent;
  let fixture: ComponentFixture<NewEditRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
