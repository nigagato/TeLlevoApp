import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarvehiculoPage } from './registrarvehiculo.page';

describe('RegistrarvehiculoPage', () => {
  let component: RegistrarvehiculoPage;
  let fixture: ComponentFixture<RegistrarvehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrarvehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
