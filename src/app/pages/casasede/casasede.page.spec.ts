import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasasedePage } from './casasede.page';

describe('CasasedePage', () => {
  let component: CasasedePage;
  let fixture: ComponentFixture<CasasedePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CasasedePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
