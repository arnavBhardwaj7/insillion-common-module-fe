import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginGraphicComponent } from './login-graphic.component';

describe('LoginGraphicComponent', () => {
  let component: LoginGraphicComponent;
  let fixture: ComponentFixture<LoginGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
