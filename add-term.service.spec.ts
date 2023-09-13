import { TestBed } from '@angular/core/testing';

import { AddTermService } from './add-term.service';

describe('AddTermService', () => {
  let service: AddTermService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTermService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
