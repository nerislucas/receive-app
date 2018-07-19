import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicField } from '../../models/dynamicField';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {
  @Input()
  labelName = '';

  @Input()
  formArrayName = '';

  @Input()
  dataFormArray: FormArray;

  @Input()
  formGroup?: FormGroup = undefined;

  @Input()
  dynamicFields: DynamicField[] = [];

  @Input()
  formBuilder: FormBuilder;

  constructor() { }

  ngOnInit() { }

  onAddItem() {
    const fieldArray = <FormArray>this.formGroup.controls[this.formArrayName];
    fieldArray.push(this.loadNewDynamicField());
  }

  onRemoveItem(index) {
    const fieldArray = <FormArray>this.formGroup.controls[this.formArrayName];
    fieldArray.removeAt(index);
  }

  loadNewDynamicField(): FormGroup {
    const group = {};

    for (const dynamicField of this.dynamicFields) {
      group[dynamicField.field] = ['', Validators.required];
    }

    return this.formBuilder.group(group);
  }
}
