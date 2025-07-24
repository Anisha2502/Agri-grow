import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-start-application',
  templateUrl: './start-application.component.html',
  styleUrls: ['./start-application.component.scss']
})
export class StartApplicationComponent implements OnInit {
  season: string = '';
  startDate: Date | null = null;
  today: Date = new Date();

  cropOptions = ['Rice', 'Wheat', 'Pulses', 'Vegetables', 'Sugarcane'];
  seasons = ['Kharif', 'Rabi', 'Zaid'];
  parcels: any[] = [];

   mlQuestions = [
    { key: 'fertilizerNkgPerHa', label: 'Fertilizer used (kg/hectare)', type: 'number', required: true },
    { key: 'irrigationType', label: 'Irrigation Method', type: 'select', options: ['Drip', 'Canal', 'Rain-fed', 'flood', 'furrow', 'basin'], required: true },
    { key: 'dieselLiters', label: 'How many liters of diesel is consumed for agricultural activities?', type: 'number', required: false },
    { key: 'manureApplied', label: 'Do you use organic compost or manure', type: 'select', options: ['Yes', 'No'], required: false },
    { key: 'till', label: 'Do you use tilling for soil preparations and planting?', type: 'select', options: ['Yes', 'No'], required: false },
    { key: 'treesPlanted', label: 'Trees planted (count)', type: 'number', required: false },
    { key: 'durationMonths', label: 'What is the duration of crop cycle (in months) ?', type: 'number', required: false },
  ];

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    //this.addParcel();
  }

  addParcel() {
    this.parcels.push({
      parcelId: Date.now(),
      cropType: '',
      areaHa: null,
      fertilizerNkgPerHa: null,
      irrigationType: '',
      dieselLiters: null,
      manureApplied: '',
      till: '',
      treesPlanted: null,
      durationMonths: null,
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
      formData.append(`parcels[${index}].cropType`, parcel.cropType);
      formData.append(`parcels[${index}].areaHa`, parcel.areaHa);
      formData.append(`parcels[${index}].fertilizerNkgPerHa`, parcel.fertilizerNkgPerHa);
      formData.append(`parcels[${index}].irrigationType`, parcel.irrigationType);
      formData.append(`parcels[${index}].dieselLiters`, parcel.dieselLiters);
      formData.append(`parcels[${index}].manureApplied`, parcel.manureApplied);
      formData.append(`parcels[${index}].till`, parcel.till);
      formData.append(`parcels[${index}].treesPlanted`, parcel.treesPlanted);
      formData.append(`parcels[${index}].durationMonths`, parcel.durationMonths);

      if (parcel.file) {
        formData.append(`parcels[${index}].file`, parcel.file);
      }
    });

    formData.forEach((value, key) => {
  console.log(`${key}:`, value);
});


    this.http.post('http://localhost:8080/api/applications', formData).subscribe({
      next: () => {
        //alert('Application submitted successfully!');
        this.snackBar.open('Application submitted successfully!', 'Close', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.snackBar.open('Something went wrong. Please try again.', 'Close', {
            duration: 3000
          });
        //alert('Something went wrong. Please try again.');
      }
    });
  }
}
