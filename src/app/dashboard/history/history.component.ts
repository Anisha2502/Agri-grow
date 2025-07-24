import { Component, OnInit } from '@angular/core';
import { ActiveApplicationService } from '../services/active-application.service';
import { PastApplicationService } from '../services/past-application.service';

interface PastApplication {
  applicationDate: string;
  season: string;
  status: string;
  cropType: string;
  area: number;
  estimatedCredits: number | undefined;
  verifiedCredits: number | undefined;
  verificationDate: string | undefined;
  creditedAmount: number | undefined;
  sellingDate: string | undefined;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit{
  pastApplications: PastApplication[] = [];
  farmerId: number = 0;

  constructor(private pastApplicationService: PastApplicationService) {}

  ngOnInit(): void {
    const storedId = localStorage.getItem('farmerId');
    this.farmerId = storedId ? parseInt(storedId) : 0;

    if (this.farmerId) {
      this.fetchPastApplications();
    }
  }

  fetchPastApplications(): void {
    this.pastApplicationService.getPastApplications(this.farmerId).subscribe({
      next: (data: any[]) => {
        this.pastApplications = data;
      },
      error: (err: any) => {
        console.error('Failed to fetch active applications', err);
      }
    });
  }
}
