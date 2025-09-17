import { Component } from '@angular/core';
import { PORTAL_TITLE, PORTAL__SUB_TITLE } from '../../shared/services/constants/constants';

@Component({
  selector: 'app-login-graphic',
  imports: [],
  templateUrl: './login-graphic.component.html',
  styleUrl: './login-graphic.component.scss'
})
export class LoginGraphicComponent {
  title = PORTAL_TITLE
  subTitle = PORTAL__SUB_TITLE
}
