import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrocompletoPage } from './registrocompleto.page';

describe('RegistrocompletoPage', () => {
  let component: RegistrocompletoPage;
  let fixture: ComponentFixture<RegistrocompletoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistrocompletoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
