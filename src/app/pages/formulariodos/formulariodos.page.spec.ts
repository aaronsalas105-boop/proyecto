import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariodosPage } from './formulariodos.page';

describe('FormulariodosPage', () => {
  let component: FormulariodosPage;
  let fixture: ComponentFixture<FormulariodosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
