import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RescontracodPage } from './rescontracod.page';

describe('RescontracodPage', () => {
  let component: RescontracodPage;
  let fixture: ComponentFixture<RescontracodPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RescontracodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
