import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajecanceladoPage } from './viajecancelado.page';

describe('ViajecanceladoPage', () => {
  let component: ViajecanceladoPage;
  let fixture: ComponentFixture<ViajecanceladoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajecanceladoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
