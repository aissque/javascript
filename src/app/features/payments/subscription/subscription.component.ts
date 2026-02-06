import { Component } from '@angular/core';
import { PaymentService, PricingInput } from '../../../core/services/payment.service';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  pricingInput: PricingInput = {
    classType: 'private',
    mode: 'video',
    teacherType: 'ai',
    level: 'high',
    subject: 'Mathématiques',
    hoursPerDay: 1,
    daysPerWeek: 3
  };

  plans = [
    { name: 'Basic', features: ['AI tutor', 'Text chat', 'Weekly report'] },
    { name: 'Standard', features: ['AI tutor', 'Audio sessions', 'Homework review'] },
    { name: 'Premium', features: ['AI + human', 'Video sessions', 'Parent insights'] },
    { name: 'Pro', features: ['Hybrid classroom', 'Analytics', 'Priority support'] }
  ];

  constructor(private paymentService: PaymentService) {}

  get estimatedPrice(): number {
    return this.paymentService.calculatePrice(this.pricingInput);
  }
}
