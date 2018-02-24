import { TestBed, inject } from '@angular/core/testing';

import { BaseRestService } from './base-rest.service';

describe('BaseRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseRestService]
    });
  });

  it('should be created', inject([BaseRestService], (service: BaseRestService) => {
    expect(service).toBeTruthy();
  }));
});
