import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariocincoPage } from './formulariocinco.page';

describe('FormulariocincoPage', () => {
  let component: FormulariocincoPage;
  let fixture: ComponentFixture<FormulariocincoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariocincoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
