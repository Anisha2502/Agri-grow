import { Component, OnInit } from '@angular/core';
import { ActiveApplicationService } from '../services/active-application.service';

interface ActiveApplication {
  applicationDate: string;
  season: string;
  status: string;
  cropType: string;
  area: number;
  estimatedCredits: number | undefined;
  verifiedCredits: number | undefined;
  verificationDate: string | undefined;
}

@Component({
  selector: 'app-active-applications',
  templateUrl: './active-applications.component.html',
  styleUrls: ['./active-applications.component.scss']
})
export class ActiveApplicationsComponent implements OnInit{
  activeApplications: ActiveApplication[] = [];
  farmerId: number = 0;

  constructor(private activeApplicationService: ActiveApplicationService) {}

  ngOnInit(): void {
    const storedId = localStorage.getItem('farmerId');
    this.farmerId = storedId ? parseInt(storedId) : 0;

    if (this.farmerId) {
      this.fetchActiveApplications();
    }
  }

  fetchActiveApplications(): void {
    this.activeApplicationService.getActiveApplications(this.farmerId).subscribe({
      next: (data: any[]) => {
        this.activeApplications = data;
      },
      error: (err: any) => {
        console.error('Failed to fetch active applications', err);
      }
    });
  }
}