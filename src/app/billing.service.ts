import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private baseUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  saveBilling(billingData: any) {
    return this.http.post(this.baseUrl, billingData);
  }
}
