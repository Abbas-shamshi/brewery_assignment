import { TestBed } from '@angular/core/testing';

import { GetBreweryDataService } from './get-brewery-data.service';

describe('GetBreweryDataService', () => {
  let service: GetBreweryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBreweryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
