import { TestBed } from '@angular/core/testing';

import { ApiariosService } from './apiarios.service';

describe('ApiariosService', () => {
  let service: ApiariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
