import { TestBed } from '@angular/core/testing';

import { CreateCommandeService } from './create-commande.service';

describe('CreateCommandeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateCommandeService = TestBed.get(CreateCommandeService);
    expect(service).toBeTruthy();
  });
});
