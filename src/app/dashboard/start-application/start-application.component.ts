// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { ApplicationStateService } from '../services/application-state.service';

// interface ParcelInput {
//   parcelId: number;
//   crop: string;
//   area: number;
//   season: string;
//   [key: string]: any;
// }

// @Component({
//   selector: 'app-start-application',
//   templateUrl: './start-application.component.html',
//   styleUrls: ['./start-application.component.scss']
// })
// export class StartApplicationComponent {
//   seasonOptions = ['Kharif', 'Rabi', 'Zaid'];
//   cropOptions = ['Rice', 'Wheat', 'Maize', 'Cotton'];

//   season: string = '';
// year: number = new Date().getFullYear();
// seasons: string[] = ['Kharif', 'Rabi', 'Zaid'];


//   parcels: ParcelInput[] = [];

//   mlQuestions = [
//     { key: 'fertilizerAmount', label: 'Fertilizer used (kg/acre)', type: 'number', required: true },
//     { key: 'fertilizerType', label: 'Type of Fertilizer', type: 'select', options: ['Urea', 'DAP', 'Compost'], required: true },
//     { key: 'treesPlanted', label: 'Trees planted (count)', type: 'number', required: false },
//     { key: 'irrigationMethod', label: 'Irrigation Method', type: 'select', options: ['Drip', 'Canal', 'Rain-fed'], required: true },
//     { key: 'organicPractices', label: 'Organic Practices Used', type: 'toggle', required: false }
//   ];

//  constructor(
//   private router: Router,
//   private appState: ApplicationStateService
// ) {}

//   addParcel() {
//     this.parcels.push({
//       parcelId: Date.now(),
//       crop: '',
//       area: 0,
//       season: '',
//     });
//   }

//   removeParcel(index: number) {
//     this.parcels.splice(index, 1);
//   }

//   submitApplication() {
//     alert('✅ Application Submitted Successfully!');
//   this.appState.hideNav(); // Hide nav
//   this.router.navigate(['/dashboard']);
//   }

//   uploadedFiles: { [parcelId: number]: File } = {};

// onFileUpload(event: any, parcelId: number) {
//   if (event.target.files.length) {
//     this.uploadedFiles[parcelId] = event.target.files[0];
//   }
// }

// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-start-application',
//   templateUrl: './start-application.component.html',
//   styleUrls: ['./start-application.component.scss']
// })
// export class StartApplicationComponent implements OnInit {
//   season: string = '';
//   startDate: Date | null = null;
//   today: Date = new Date();

//   cropOptions: string[] = ['Rice', 'Wheat', 'Maize', 'Sugarcane'];
//   seasons: string[] = ['Kharif', 'Rabi', 'Zaid'];

//   parcels: any[] = [];

//   mlQuestions = [
//     { key: 'fertilizerUsed', label: 'Fertilizer Used (kg/acre)', type: 'number' },
//     { key: 'irrigationMethod', label: 'Irrigation Method', type: 'select', options: ['Drip', 'Flood', 'Sprinkler'] },
//     { key: 'organicPractices', label: 'Used Organic Practices?', type: 'toggle' }
//   ];

//   constructor(private router: Router) {}

//   ngOnInit(): void {
//     this.addParcel(); // Add one by default
//   }

//   addParcel() {
//     this.parcels.push({
//       parcelId: Date.now(), // basic unique ID
//       crop: '',
//       area: null,
//       fertilizerUsed: null,
//       irrigationMethod: '',
//       organicPractices: false
//     });
//   }

//   removeParcel(index: number) {
//     this.parcels.splice(index, 1);
//   }

//   onFileUpload(event: any, parcelId: number) {
//     const file = event.target.files[0];
//     const parcel = this.parcels.find(p => p.parcelId === parcelId);
//     if (parcel && file) {
//       parcel.file = file;
//     }
//   }

//   submitApplication() {
//     const payload = {
//       season: this.season,
//       startDate: this.startDate,
//       parcels: this.parcels
//     };

//     console.log('Submitting:', payload);

//     // Simulate API call
//     setTimeout(() => {
//       alert('Application Submitted Successfully!');
//       this.router.navigate(['/dashboard']); // remove nav tab
//     }, 1000);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-application',
  templateUrl: './start-application.component.html',
  styleUrls: ['./start-application.component.scss']
})
export class StartApplicationComponent implements OnInit {
  season: string = '';
  startDate: Date | null = null;
  today: Date = new Date();

  cropOptions = ['Rice', 'Wheat', 'Maize', 'Sugarcane'];
  seasons = ['Kharif', 'Rabi', 'Zaid'];
  parcels: any[] = [];

  // mlQuestions = [
  //   { key: 'fertilizerUsed', label: 'Fertilizer Used (kg/acre)', type: 'number' },
  //   { key: 'irrigationMethod', label: 'Irrigation Method', type: 'select', options: ['Drip', 'Flood', 'Sprinkler'] },
  //   { key: 'organicPractices', label: 'Used Organic Practices?', type: 'toggle' }
  // ];
   mlQuestions = [
    { key: 'fertilizerAmount', label: 'Fertilizer used (kg/acre)', type: 'number', required: true },
    { key: 'fertilizerType', label: 'Type of Fertilizer', type: 'select', options: ['Urea', 'DAP', 'Compost'], required: true },
    { key: 'treesPlanted', label: 'Trees planted (count)', type: 'number', required: false },
    { key: 'irrigationMethod', label: 'Irrigation Method', type: 'select', options: ['Drip', 'Canal', 'Rain-fed'], required: true },
    { key: 'organicPractices', label: 'Organic Practices Used', type: 'toggle', required: false }
  ];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.addParcel();
  }

  addParcel() {
    this.parcels.push({
      parcelId: Date.now(),
      crop: '',
      area: null,
      fertilizerUsed: null,
      irrigationMethod: '',
      organicPractices: false,
      file: null
    });
  }

  removeParcel(index: number) {
    this.parcels.splice(index, 1);
  }

  onFileUpload(event: any, parcelId: number) {
    const file = event.target.files[0];
    const parcel = this.parcels.find(p => p.parcelId === parcelId);
    if (parcel) {
      parcel.file = file;
    }
  }

  submitApplication() {
    const formData = new FormData();
    formData.append('season', this.season);
    formData.append('startDate', this.startDate?.toISOString() || '');

    this.parcels.forEach((parcel, index) => {
      formData.append(`parcels[${index}].crop`, parcel.crop);
      formData.append(`parcels[${index}].area`, parcel.area);
      formData.append(`parcels[${index}].fertilizerUsed`, parcel.fertilizerUsed);
      formData.append(`parcels[${index}].irrigationMethod`, parcel.irrigationMethod);
      formData.append(`parcels[${index}].organicPractices`, parcel.organicPractices);

      if (parcel.file) {
        formData.append(`parcels[${index}].file`, parcel.file);
      }
    });

    this.http.post('http://localhost:8080/api/applications', formData).subscribe({
      next: () => {
        alert('Application submitted successfully!');
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        alert('Something went wrong. Please try again.');
      }
    });
  }
}
