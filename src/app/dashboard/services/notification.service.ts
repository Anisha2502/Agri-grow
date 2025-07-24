import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private BASE_URL = 'https://agro-backend-ms-f2dechbuaggncfdf.centralindia-01.azurewebsites.net';

  constructor(private http: HttpClient) {}

  getNotificationsForUser(farmerId: number): Observable<any[]> {
    // return this.http.get<any[]>(`${this.BASE_URL}/api/farmer/notifications/${farmerId}`);
    const mockApplications = [
      {
      type: 'verification',
      message: 'Your verification is complete.',
      timestamp: '2025-07-18',
    },
    {
      type: 'credit',
      message: '₹2,500 has been credited to your bank account.',
      timestamp: '2025-07-17',
    },
    {
      type: 'verification',
      message: 'Your verification is complete.',
      timestamp: '2025-07-18',
    },
    {
      type: 'credit',
      message: '₹2,500 has been credited to your bank account.',
      timestamp: '2025-07-17',
    }
    ];

    return of(mockApplications);
  }
}
