import { TestBed } from '@angular/core/testing';

import { ErrorServerService } from './error-server.service';

describe('ErrorServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorServerService = TestBed.get(ErrorServerService);
    expect(service).toBeTruthy();
  });
});
