import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pasajero1Page } from './pasajero1.page';

describe('Pasajero1Page', () => {
  let component: Pasajero1Page;
  let fixture: ComponentFixture<Pasajero1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pasajero1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
