import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
})
export class BillingComponent implements OnInit {
  productName: string | undefined;
  location: string | undefined;
product: any;
  productPrice: any;
  productId: any;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productName = params['productName'];
      this.location = params['location'];
      this.productId = params['productId'];
      this.productPrice = params['productPrice'];
    });
  }

  makePayment() {
    // Assuming you have a backend endpoint for storing billing details
    const billingData = {
      productName: this.productName,
      location: this.location,
    };

    this.http.post('/api/storeBillingData', billingData).subscribe(
      (response) => {
        // Handle the successful storage of billing data
        console.log('Billing data stored successfully');
        this.showConfirmationMessage();
      },
      (error) => {
        console.error('Error storing billing data:', error);
      }
    );
  }

  showConfirmationMessage() {
    // Display a confirmation message using JavaScript
    alert('Payment successful! Thank you for your purchase.');
    this.router.navigate(['/thankyou']); // Route to the thank you page
  }
}
