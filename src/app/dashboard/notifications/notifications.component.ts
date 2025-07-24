import { Component } from '@angular/core';

interface Notification {
  type: 'stage' | 'ngo' | 'payment' | 'reminder';
  message: string;
  timestamp: string;
  read: boolean;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  allNotifications: Notification[] = [
    {
      type: 'stage',
      message: '✅ Your verification is complete.',
      timestamp: '2025-07-18 10:45 AM',
      read: false
    },
    {
      type: 'payment',
      message: '💰 ₹2,500 has been credited to your bank account.',
      timestamp: '2025-07-17 03:15 PM',
      read: true
    },
    {
      type: 'reminder',
      message: '⏰ Submit your documents for the Kharif 2025 season.',
      timestamp: '2025-07-16 08:00 AM',
      read: false
    },
    {
      type: 'ngo',
      message: '👩‍🌾 NGO SevaKisan has messaged: "Site visit scheduled tomorrow."',
      timestamp: '2025-07-15 05:30 PM',
      read: true
    }
  ];

  filter = 'all';
  pageSize = 3;
  currentPage = 0;

  get filteredNotifications(): Notification[] {
    let list = this.filter === 'all' ? this.allNotifications :
      this.allNotifications.filter(n => n.type === this.filter);

    return list.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
  }

  changeFilter(value: string) {
    this.filter = value;
    this.currentPage = 0;
  }

  markAsRead(index: number) {
    const globalIndex = this.getGlobalIndex(index);
    this.allNotifications[globalIndex].read = true;
  }

  deleteNotification(index: number) {
    const globalIndex = this.getGlobalIndex(index);
    this.allNotifications.splice(globalIndex, 1);
  }

  clearAll() {
    this.allNotifications = [];
  }

  nextPage() {
    this.currentPage++;
  }

  prevPage() {
    this.currentPage--;
  }

  getGlobalIndex(indexOnPage: number): number {
    return this.currentPage * this.pageSize + indexOnPage;
  }

  get totalPages(): number {
    const filteredLength = this.filter === 'all'
      ? this.allNotifications.length
      : this.allNotifications.filter(n => n.type === this.filter).length;
    return Math.ceil(filteredLength / this.pageSize);
  }
}
