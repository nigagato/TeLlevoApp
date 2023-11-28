import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasajero3Page } from './pasajero3.page';

describe('Pasajero3Page', () => {
  let component: Pasajero3Page;
  let fixture: ComponentFixture<Pasajero3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasajero3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
