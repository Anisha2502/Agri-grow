import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent {
  reminders = [
    {
      crop: 'Kharif 2025',
      dueDate: '2025-07-30',
      message: '🌾 Time to submit your Kharif 2025 crop!',
      status: 'Upcoming'
    },
    {
      crop: 'Rabi 2024',
      dueDate: '2024-12-15',
      message: '🌾 Reminder: Submit your Rabi 2024 application soon!',
      status: 'Missed'
    }
  ];

  constructor(private router: Router) {}

  startNewApplication() {
    this.router.navigate(['/dashboard/land-crop']);
  }
}
