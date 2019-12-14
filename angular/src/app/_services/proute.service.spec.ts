import { TestBed } from '@angular/core/testing';

import { ProuteService } from './proute.service';

describe('ProuteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProuteService = TestBed.get(ProuteService);
    expect(service).toBeTruthy();
  });
});
