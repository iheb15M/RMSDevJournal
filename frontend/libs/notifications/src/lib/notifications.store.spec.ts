import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NotificationStore } from './notifications.store';

describe('NotificationStore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NotificationStore, provideMockStore({})],
    });
  });

  it('should be created', inject([NotificationStore], (service: typeof NotificationStore) => {
    expect(service).toBeTruthy();
  }));
});
