import { TestBed } from '@angular/core/testing';

import { TodoMockService } from './todo-mock.service';

describe('TodoMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoMockService = TestBed.get(TodoMockService);
    expect(service).toBeTruthy();
  });
});
