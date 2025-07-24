import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActiveApplicationService {
  private BASE_URL = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) {}

  getActiveApplications(userId: number): Observable<any[]> {
    // return this.http.get<any[]>(`${this.BASE_URL}/active/${userId}`);
    const mockApplications = [
      {
        id: 1,
        season: 'Kharif',
        year: '2025',
        status: 'In Progress',
        ngoName: 'GreenField Trust',
        verificationDate: '2025-08-10',
        requestedDocs: ['Land Proof'],
        parcels: [
          {
            crop: 'Wheat',
            area: 3.5,
            estimatedCredits: 1.2,
            verifiedCredits: null,
            soldCredits: null
          },
          {
            crop: 'Rice',
            area: 2.0,
            estimatedCredits: 1.8,
            verifiedCredits: 1.7,
            soldCredits: null
          }
        ]
      }
    ];

    return of(mockApplications);
  }
}
