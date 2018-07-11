import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEditRecipeComponentComponent } from './new-edit-recipe-component.component';

describe('NewEditRecipeComponentComponent', () => {
  let component: NewEditRecipeComponentComponent;
  let fixture: ComponentFixture<NewEditRecipeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEditRecipeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEditRecipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
