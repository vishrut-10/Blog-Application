import { TestBed, inject } from '@angular/core/testing';

import { AllBlogsService } from './all-blogs.service';

describe('AllBlogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllBlogsService]
    });
  });

  it('should be created', inject([AllBlogsService], (service: AllBlogsService) => {
    expect(service).toBeTruthy();
  }));
});
