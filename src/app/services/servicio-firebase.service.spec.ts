import { TestBed } from '@angular/core/testing';

import { ServicioFirebaseService } from './servicio-firebase.service';

describe('ServicioFirebaseService', () => {
  let service: ServicioFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
