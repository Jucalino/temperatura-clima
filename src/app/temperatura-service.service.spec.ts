import { TestBed } from '@angular/core/testing';

import { TemperaturaServiceService } from './temperatura-service.service';

describe('TemperaturaServiceService', () => {
  let service: TemperaturaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperaturaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
