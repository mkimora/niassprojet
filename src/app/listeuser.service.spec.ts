import { TestBed } from '@angular/core/testing';

import { ListeuserService } from './listeuser.service';

describe('ListeuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListeuserService = TestBed.get(ListeuserService);
    expect(service).toBeTruthy();
  });
});
