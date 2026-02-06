import { Component, OnInit } from '@angular/core';
import { DataService, Payment } from '../../../core/services/data.service';

@Component({
  selector: 'app-payment-management',
  templateUrl: './payment-management.component.html',
  styleUrls: ['./payment-management.component.scss']
})
export class PaymentManagementComponent implements OnInit {
  payments: Payment[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPayments().subscribe((payments) => (this.payments = payments));
  }
}
