import { Component } from '@angular/core';
import { WalletService } from '../services/wallet.service';

interface Transaction {
  date: string;
  cropType: string;
  season: string;
  amount: number;
  credit: number;
}

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {
  balance: number = 0;
  creditsSold: number = 0;
  farmerId: number = 0;

  transactions: Transaction[] = [];

  constructor(private walletService: WalletService) {}
  
    ngOnInit(): void {
      const storedId = localStorage.getItem('farmerId');
      this.farmerId = storedId ? parseInt(storedId) : 0;
  
      if (this.farmerId) {
        this.fetchTransactions();
      }
    }
  
    fetchTransactions() {
      this.walletService.getTransactionHistory(this.farmerId).subscribe(
        (data) => {
          this.transactions = data;
          this.balance = this.transactions.reduce((sum, data) => sum + data.amount, 0);
          this.creditsSold = this.transactions.reduce((sum, data) => sum + data.credit, 0);
        },
        (err) => {
          console.error('Failed to load transactions', err);
        }
      );
    }

}
