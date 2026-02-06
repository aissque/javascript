import { Injectable } from '@angular/core';
import { DataService, Payment, Subscription } from './data.service';
import { map, Observable } from 'rxjs';

export interface PricingInput {
  classType: 'group' | 'private';
  mode: 'text' | 'audio' | 'video' | 'hybrid';
  teacherType: 'ai' | 'human';
  level: 'primary' | 'middle' | 'high' | 'university' | 'professional';
  subject: string;
  hoursPerDay: number;
  daysPerWeek: number;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private modeMultiplier: Record<PricingInput['mode'], number> = {
    text: 0.8,
    audio: 1,
    video: 1.2,
    hybrid: 1.35
  };

  private levelMultiplier: Record<PricingInput['level'], number> = {
    primary: 0.8,
    middle: 0.9,
    high: 1,
    university: 1.2,
    professional: 1.35
  };

  constructor(private dataService: DataService) {}

  calculatePrice(input: PricingInput): number {
    const base = input.teacherType === 'ai' ? 8 : 22;
    const classMultiplier = input.classType === 'private' ? 1.4 : 1;
    const subjectBoost = input.subject === 'Programming' ? 1.2 : 1;
    const totalHours = Math.max(1, input.hoursPerDay) * Math.max(1, input.daysPerWeek);

    return (
      base *
      classMultiplier *
      this.modeMultiplier[input.mode] *
      this.levelMultiplier[input.level] *
      subjectBoost *
      totalHours
    );
  }

  listPayments(): Observable<Payment[]> {
    return this.dataService.getPayments();
  }

  listSubscriptions(): Observable<Subscription[]> {
    return this.dataService.getSubscriptions();
  }

  createPayment(payment: Payment): Observable<Payment> {
    return this.dataService.getPayments().pipe(
      map((payments) => {
        payments.push(payment);
        return payment;
      })
    );
  }
}
