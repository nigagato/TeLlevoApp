import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContrarestablecidaPage } from './contrarestablecida.page';

describe('ContrarestablecidaPage', () => {
  let component: ContrarestablecidaPage;
  let fixture: ComponentFixture<ContrarestablecidaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContrarestablecidaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
