import { TestBed, inject } from '@angular/core/testing';

import { SocketserviceService } from './socketservice.service';

describe('SocketserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketserviceService]
    });
  });

  it('should be created', inject([SocketserviceService], (service: SocketserviceService) => {
    expect(service).toBeTruthy();
  }));
});
