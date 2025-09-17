import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// ✅ Angular Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { DynamicFormComponent } from '../login/dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Material UI
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    DynamicFormComponent,
    MatButtonToggleModule,
  ],
  exports: [
    // Export so feature modules can use them
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    DynamicFormComponent,
    MatButtonToggleModule,
  ],
})
export class SharedModule {}
