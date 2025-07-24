import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;
  languages = ['English', 'Hindi', 'Telugu'];
  hidePass = true;
  hideConfirm = true;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
        language: ['', Validators.required],
        landArea: ['', [Validators.required, Validators.min(0.1)]],
        location: ['', Validators.required],
        ownershipProof: [null, Validators.required],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  ngOnInit() {
    this.getLocation();
  }

  get f() {
    return this.registerForm.controls;
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
        this.registerForm.patchValue({ location: coords });
      });
    }
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return pass === confirm ? null : { mismatch: true };
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input?.files?.[0];
    if (file) {
      this.selectedFile = file;
      this.registerForm.patchValue({ ownershipProof: file.name });
    }
  }

  submitForm() {
    this.submitted = true;
    if (this.registerForm.invalid || !this.selectedFile) return;

    const formData = new FormData();
    formData.append('fullName', this.registerForm.value.fullName);
    formData.append('mobile', this.registerForm.value.mobile);
    formData.append('language', this.registerForm.value.language);
    formData.append('landArea', this.registerForm.value.landArea);
    formData.append('location', this.registerForm.value.location);
    formData.append('password', this.registerForm.value.password);

    // Simulate registration (replace with actual backend call)
    setTimeout(() => {
      this.snackBar.open('Registration successful!', 'Close', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
      this.router.navigate(['/dashboard']);
    }, 1000);
  }
}


  // submitForm() {
  //   this.submitted = true;
  //   if (this.registerForm.valid && this.selectedFile) {
  //     const formData = new FormData();
  //     formData.append('fullName', this.f['fullName'].value);
  //     formData.append('mobile', this.f['mobile'].value);
  //     formData.append('language', this.f['language'].value);
  //     formData.append('landArea', this.f['landArea'].value);
  //     formData.append('location', this.f['location'].value);
  //     formData.append('password', this.f['password'].value);

  //     this.http.post('http://localhost:8080/api/auth/register', formData).subscribe(
  //       () => {
  //         this.snackBar.open('Registration successful!', 'Close', {
  //           duration: 3000,
  //           panelClass: ['success-snackbar']
  //         });
  //         this.router.navigate(['/dashboard']);
  //       },
  //       () => {
  //         this.snackBar.open('Registration failed. Try again.', 'Close', {
  //           duration: 3000
  //         });
  //       }
  //     );
  //   }
  // }

