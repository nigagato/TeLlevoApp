import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleviajePage } from './detalleviaje.page';

describe('DetalleviajePage', () => {
  let component: DetalleviajePage;
  let fixture: ComponentFixture<DetalleviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalleviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
