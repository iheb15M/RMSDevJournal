import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { ApiService } from '@infordevjournal/core/http-client';
import { MockProvider } from 'ng-mocks';
import { ActionsService } from './actions.service';

describe('ActionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActionsService, MockProvider(ApiService)],
    });
  });

  it('should be created', inject([ActionsService], (service: ActionsService) => {
    expect(service).toBeTruthy();
  }));
});
