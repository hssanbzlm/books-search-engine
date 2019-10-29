import { TestBed } from '@angular/core/testing';

import { BooksearchServiceService } from './booksearch-service.service';

describe('BooksearchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BooksearchServiceService = TestBed.get(BooksearchServiceService);
    expect(service).toBeTruthy();
  });
});
