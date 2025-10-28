import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VeranfitrionPage } from './veranfitrion.page';

describe('VeranfitrionPage', () => {
  let component: VeranfitrionPage;
  let fixture: ComponentFixture<VeranfitrionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VeranfitrionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
