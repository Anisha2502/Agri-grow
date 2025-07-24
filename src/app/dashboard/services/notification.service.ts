import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private BASE_URL = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) {}

  getNotificationsForUser(farmerId: number): Observable<any[]> {
    // return this.http.get<any[]>(`${this.BASE_URL}/active/${farmerId}`);
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
