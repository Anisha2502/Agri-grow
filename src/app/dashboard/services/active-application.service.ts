import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActiveApplicationService {
  private BASE_URL = 'https://agro-backend-ms-f2dechbuaggncfdf.centralindia-01.azurewebsites.net';

  constructor(private http: HttpClient) {}


  getActiveApplications(farmerId: number): Observable<any[]> {
    // return this.http.get<any[]>(`${this.BASE_URL}/api/application/open/${farmerId}`);
    const mockApplications = [
      {
        applicationDate: '2025-08-10',
        season: 'Kharif',
        status: 'Under Verification',
        cropType: 'Rice',
        area: 3.5,
        estimatedCredits: 1.2,
        verificationDate: '2025-08-15'
      },
      {
        applicationDate: '2025-08-10',
        season: 'Kharif',
        status: 'Under Verification',
        cropType: 'Wheat',
        area: 2.5,
        estimatedCredits: 2.2,
        verifiedCredits: 2,
      }
    ];

    return of(mockApplications);
  }
}
