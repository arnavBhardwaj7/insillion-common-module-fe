import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatButtonToggleModule,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent {
  @Input() schema: any;
  form!: FormGroup;
  userType: string = 'external';
  currentSchema: any;
  schemaKeys: string[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.schemaKeys = Object.keys(this.schema);
    const group: any = {};
    this.setValidations();
  }

  onUserTypeChange(value: string) {
    this.userType = value;
    this.setValidations();
  }

  setValidations() {
    this.currentSchema = this.schema[this.userType];
    if ((this.currentSchema.type = 'form')) {
      const formControls: any = {};
      this.currentSchema.fields.forEach((field: any) => {
        const validators = [];
        if (field.validators?.includes('required')) {
          validators.push(Validators.required);
        }
        if (field.validators?.includes('email')) {
          validators.push(Validators.email);
        }
        const minLengthValidator = field.validators?.find((v: string) =>
          v.includes('minLength')
        );
        if (minLengthValidator) {
          validators.push(
            Validators.minLength(minLengthValidator.split(':')[1])
          );
        }
        formControls[field.name] = [null, validators];
        this.form = this.fb.group(formControls);
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted successfully', this.form.value);
    } else {
      console.log('Form is invalid', this.form.errors);
    }
  }

  getFormControl(name: string) {
    return this.form.get(name);
  }
}
