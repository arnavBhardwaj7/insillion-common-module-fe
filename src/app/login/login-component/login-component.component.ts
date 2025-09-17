import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { LoginGraphicComponent } from '../login-graphic/login-graphic.component';

import { LOGIN_CONFIG } from '../../schemas/login.config';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [CommonModule, DynamicFormComponent, LoginGraphicComponent],
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss'],
})
export class LoginComponentComponent {
  userType: 'external' | 'sso' = 'external';
  LOGIN_CONFIG = LOGIN_CONFIG;

  onUserTypeChange(value: 'external' | 'sso') {
    this.userType = value;
  }
}
