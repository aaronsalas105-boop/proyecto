import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReserviewPage } from './reserview.page';

describe('ReserviewPage', () => {
  let component: ReserviewPage;
  let fixture: ComponentFixture<ReserviewPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
