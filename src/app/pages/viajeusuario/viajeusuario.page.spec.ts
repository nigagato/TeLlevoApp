import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViajeusuarioPage } from './viajeusuario.page';

describe('ViajeusuarioPage', () => {
  let component: ViajeusuarioPage;
  let fixture: ComponentFixture<ViajeusuarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViajeusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
