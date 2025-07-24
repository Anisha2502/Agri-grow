import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PastApplicationService {
  private BASE_URL = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) {}


  getPastApplications(farmerId: number): Observable<any[]> {
    // return this.http.get<any[]>(`${this.BASE_URL}/active/${farmerId}`);
    const mockApplications = [
      {
        applicationDate: '2025-08-10',
        season: 'Kharif',
        status: 'Completed',
        cropType: 'Rice',
        area: 3.5,
        estimatedCredits: 1.2,
        verifiedCredits: 2,
        verificationDate: '2025-08-15',
        creditedAmount: 2000,
        sellingDate: '2025-08-20'

      },
      {
        applicationDate: '2025-08-10',
        season: 'Kharif',
        status: 'Rejected',
        cropType: 'Wheat',
        area: 2.5,
        estimatedCredits: 2.2,
        verifiedCredits: 2,
        verificationDate: '2025-08-15',
        creditedAmount: 2000,
        sellingDate: '2025-08-20'
      }
    ];

    return of(mockApplications);
  }
}
