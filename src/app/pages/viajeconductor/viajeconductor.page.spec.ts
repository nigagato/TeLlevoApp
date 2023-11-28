import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeconductorPage } from './viajeconductor.page';

describe('ViajeconductorPage', () => {
  let component: ViajeconductorPage;
  let fixture: ComponentFixture<ViajeconductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajeconductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
