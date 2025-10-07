import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariotresPage } from './formulariotres.page';

describe('FormulariotresPage', () => {
  let component: FormulariotresPage;
  let fixture: ComponentFixture<FormulariotresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariotresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
