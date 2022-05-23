import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should mark email as invalid when it has no value', () => {
    const ctrl = component.addressForm.get('email');
    ctrl?.setValue(null);
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy();
  });
  it('should mark email as invalid when it has value', () => {
    const ctrl = component.addressForm.get('email');
    ctrl?.setValue('test@gmail.com');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });

  it('should mark password as invalid when its value is less than 5 characters', () => {
    const ctrl = component.addressForm.get('password');
    ctrl?.setValue('1234');
    fixture.detectChanges();
    expect(ctrl?.invalid).toBeTruthy();
  });
  it('should mark email as valid when its value is greater than or equal 5 characters', () => {
    const ctrl = component.addressForm.get('password');
    ctrl?.setValue('12345');
    fixture.detectChanges();
    expect(ctrl?.valid).toBeTruthy();
  });
});
