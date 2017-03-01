import { TestBed, inject } from '@angular/core/testing';
import { AdminsPanelService } from './admins-panel.service';

describe('AdminsPanelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminsPanelService]
    });
  });

  it('should ...', inject([AdminsPanelService], (service: AdminsPanelService) => {
    expect(service).toBeTruthy();
  }));
});
