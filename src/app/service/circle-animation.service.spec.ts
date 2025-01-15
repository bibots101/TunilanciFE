import { TestBed } from '@angular/core/testing';

import { CircleAnimationService } from './circle-animation.service';

describe('CircleAnimationService', () => {
  let service: CircleAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircleAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
