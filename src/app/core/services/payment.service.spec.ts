import { TestBed } from '@angular/core/testing';
import { PaymentService } from './payment.service';
import { DataService } from './data.service';

class DataServiceStub {}

describe('PaymentService', () => {
  let service: PaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentService, { provide: DataService, useClass: DataServiceStub }]
    });
    service = TestBed.inject(PaymentService);
  });

  it('calculates price based on inputs', () => {
    const price = service.calculatePrice({
      classType: 'private',
      mode: 'video',
      teacherType: 'ai',
      level: 'high',
      subject: 'Mathématiques',
      hoursPerDay: 1,
      daysPerWeek: 2
    });

    expect(price).toBeGreaterThan(0);
  });
});
