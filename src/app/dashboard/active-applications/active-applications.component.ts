// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ApplicationStateService } from '../services/application-state.service';

// interface Parcel {
//   id: number;
//   crop: string;
//   area: number;
//   carbonEstimate: number;
//   ngoEstimate?: number;
// }

// interface Application {
//   id: number;
//   season: string;
//   year: number;
//   status: string;
//   ngoName: string;
//   verificationDate: string;
//   parcels: Parcel[];
//   requestedDocs?: string[];
// }

// @Component({
//   selector: 'app-active-applications',
//   templateUrl: './active-applications.component.html',
//   styleUrls: ['./active-applications.component.scss']
// })
// export class ActiveApplicationsComponent {
// activeApplications: Application[] = [
//     {
//       id: 1,
//       season: 'Kharif',
//       year: 2025,
//       status: 'NGO Assigned',
//       ngoName: 'GreenField Trust',
//       verificationDate: '2025-08-10',
//       requestedDocs: ['Aadhar Card'],
//       parcels: [
//         {
//           id: 1,
//           crop: 'Rice',
//           area: 3,
//           carbonEstimate: 2.5,
//           ngoEstimate: 2.1
//         },
//         {
//           id: 2,
//           crop: 'Wheat',
//           area: 5,
//           carbonEstimate: 3.2
//         }
//       ]
//     }
//   ];
//   constructor(
//   private router: Router,
//   private appState: ApplicationStateService
// ) {}

// startApplication() {
//   this.appState.showNav(); // Show temp nav
//   this.router.navigate(['/dashboard/start-application']);
// }
// }

import { Component, OnInit } from '@angular/core';
import { ActiveApplicationService } from '../services/active-application.service';

@Component({
  selector: 'app-active-applications',
  templateUrl: './active-applications.component.html',
  styleUrls: ['./active-applications.component.scss']
})
export class ActiveApplicationsComponent implements OnInit{
  activeApplications: any[] = [];
  userId: number = 0;

  constructor(private activeApplicationService: ActiveApplicationService) {}

  ngOnInit(): void {
    const storedId = localStorage.getItem('farmerId');
    this.userId = storedId ? parseInt(storedId) : 0;
    console.log(this.userId);

    if (this.userId) {
      console.log(this.userId);
      this.fetchApplications();
    }
  }

  fetchApplications(): void {
    this.activeApplicationService.getActiveApplications(this.userId).subscribe({
      next: (data: any[]) => {
        this.activeApplications = data;
      },
      error: (err: any) => {
        console.error('Failed to fetch active applications', err);
      }
    });
  }
}