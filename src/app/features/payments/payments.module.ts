import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SubscriptionComponent } from './subscription/subscription.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [SubscriptionComponent, CheckoutComponent],
  imports: [CommonModule]
})
export class PaymentsModule {}
