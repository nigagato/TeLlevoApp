import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagonorealizadoPage } from './pagonorealizado.page';

describe('PagonorealizadoPage', () => {
  let component: PagonorealizadoPage;
  let fixture: ComponentFixture<PagonorealizadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagonorealizadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
