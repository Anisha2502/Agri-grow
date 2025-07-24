import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WalletService {
  private BASE_URL = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) {}

  getTransactionHistory(farmerId: number): Observable<any[]> {
    // return this.http.get<any[]>(`${this.BASE_URL}/active/${farmerId}`);
    const mockApplications = [
      { date: '2025-07-01', cropType: 'Rice', season: 'Kharif', amount: 5000, credit: 20 },
      { date: '2025-06-10', cropType: 'Wheat', season: 'Kharif', amount: 3000, credit: 20 },
      { date: '2025-06-05', cropType: 'Rice', season: 'Rabi', amount: 7000, credit: 20 },
      { date: '2025-05-28', cropType: 'Rice', season: 'Kharif', amount: 2000, credit: 20 }
    ];

    return of(mockApplications);
  }
}
