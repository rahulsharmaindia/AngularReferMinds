import { TestBed, inject } from '@angular/core/testing';

import { UserreferralsService } from './userreferrals.service';

describe('UserreferralsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserreferralsService]
    });
  });

  it('should be created', inject([UserreferralsService], (service: UserreferralsService) => {
    expect(service).toBeTruthy();
  }));
});
