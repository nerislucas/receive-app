import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeSummaryComponentComponent } from './recipe-summary-component.component';

describe('RecipeSummaryComponentComponent', () => {
  let component: RecipeSummaryComponentComponent;
  let fixture: ComponentFixture<RecipeSummaryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeSummaryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeSummaryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
