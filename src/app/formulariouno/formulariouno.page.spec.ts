import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariounoPage } from './formulariouno.page';

describe('FormulariounoPage', () => {
  let component: FormulariounoPage;
  let fixture: ComponentFixture<FormulariounoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariounoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
