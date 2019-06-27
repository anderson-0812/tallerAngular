import { TestBed } from '@angular/core/testing';

import { AccesoService } from './acceso.service';

describe('AccesoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccesoService = TestBed.get(AccesoService);
    expect(service).toBeTruthy();
  });
});
