import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, Observable, of, throwError } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = 'https://agro-backend-ms-f2dechbuaggncfdf.centralindia-01.azurewebsites.net'

  constructor(private http: HttpClient) {}

  login(mobile: string, password: string): Observable<any> {
    //return this.http.post(`${this.api}/api/farmer/login`, { mobile, password });
    if (mobile === '9999999999' && password === '1234') {
      const mockResponse = {
        id: 1,
        name: 'Ram Prasad'
      };
      return of(mockResponse).pipe(delay(1000)); // Simulate 1s delay
    } else {
      return throwError(() => new Error('Invalid credentials')).pipe(delay(500));
    }
  }
}
