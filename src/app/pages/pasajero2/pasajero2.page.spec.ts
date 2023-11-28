import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasajero2Page } from './pasajero2.page';

describe('Pasajero2Page', () => {
  let component: Pasajero2Page;
  let fixture: ComponentFixture<Pasajero2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasajero2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
