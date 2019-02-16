import { TestBed } from '@angular/core/testing';

import { ListRestaurantService } from './list-restaurant.service';

describe('ListRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListRestaurantService = TestBed.get(ListRestaurantService);
    expect(service).toBeTruthy();
  });
});
