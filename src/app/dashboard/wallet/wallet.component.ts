import { Component } from '@angular/core';

interface Transaction {
  date: string;
  description: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Failed';
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  balance = 24000;
  creditsSold = 120;
  withdrawalAmount = 0;

  transactions: Transaction[] = [
    { date: '2025-07-01', description: 'Credit Sale - Rabi 2025', amount: 5000, status: 'Completed' },
    { date: '2025-06-10', description: 'Withdrawal to Bank', amount: -3000, status: 'Completed' },
    { date: '2025-06-05', description: 'Credit Sale - Kharif 2024', amount: 7000, status: 'Pending' },
    { date: '2025-05-28', description: 'Withdrawal to UPI', amount: -2000, status: 'Failed' },
  ];

  withdraw(method: string) {
    if (!this.withdrawalAmount || this.withdrawalAmount <= 0) return;

    const newTransaction: Transaction = {
      date: new Date().toISOString().split('T')[0],
      description: `Withdrawal to ${method.toUpperCase()}`,
      amount: -this.withdrawalAmount,
      status: 'Pending'
    };

    this.transactions.unshift(newTransaction);
    this.withdrawalAmount = 0;
  }
}
