import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevacontraPage } from './nuevacontra.page';

describe('NuevacontraPage', () => {
  let component: NuevacontraPage;
  let fixture: ComponentFixture<NuevacontraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevacontraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
