import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasajero4Page } from './pasajero4.page';

describe('Pasajero4Page', () => {
  let component: Pasajero4Page;
  let fixture: ComponentFixture<Pasajero4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasajero4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
