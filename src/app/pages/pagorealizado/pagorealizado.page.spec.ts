import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagorealizadoPage } from './pagorealizado.page';

describe('PagorealizadoPage', () => {
  let component: PagorealizadoPage;
  let fixture: ComponentFixture<PagorealizadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagorealizadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
