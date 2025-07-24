import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

interface Notification {
  type: string;
  message: string;
  timestamp: string;
}

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit{

  filter = 'all';
  pageSize = 3;
  currentPage = 0;
  farmerId: number = 0;
  allNotifications: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    const storedId = localStorage.getItem('farmerId');
    this.farmerId = storedId ? parseInt(storedId) : 0;

    if (this.farmerId) {
      this.fetchNotifications();
    }
  }

  fetchNotifications() {
    this.notificationService.getNotificationsForUser(this.farmerId).subscribe(
      (data) => {
        this.allNotifications = data;
      },
      (err) => {
        console.error('Failed to load notifications', err);
      }
    );
  }

  get filteredNotifications(): Notification[] {
    let list = this.filter === 'all' ? this.allNotifications :
      this.allNotifications.filter(n => n.type === this.filter);

    return list.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize);
  }

  changeFilter(value: string) {
    this.filter = value;
    this.currentPage = 0;
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
