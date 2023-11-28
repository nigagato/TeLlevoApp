import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadotrayectosPage } from './listadotrayectos.page';

describe('ListadotrayectosPage', () => {
  let component: ListadotrayectosPage;
  let fixture: ComponentFixture<ListadotrayectosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadotrayectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
