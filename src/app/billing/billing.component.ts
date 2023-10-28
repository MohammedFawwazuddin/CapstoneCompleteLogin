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
  productId: string | undefined;
  productPrice: string | undefined;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.productName = params['productName'];
      this.location = params['location'];
      this.productId = params['productId'];
      this.productPrice = params['productPrice'];
      console.log(this.productName);
      
    });
  }

  makePayment() {
    // Implement your payment logic here
    console.log('Payment logic goes here');
  }
}

// import { Component, OnInit } from '@angular/core';
// import { BillingService } from '../billing.service';

// @Component({
//   selector: 'app-billing',
//   templateUrl: './billing.component.html',
//   styleUrls: ['./billing.component.css']
// })
// export class BillingComponent implements OnInit {
//   billingData: any[] = []; // Declare the billingData property

//   constructor(private billingService: BillingService) {}

//   ngOnInit() {
//     this.getBillingData();
//   }

//   getBillingData() {
//     this.billingService.getBillingData().subscribe(
//       (data) => {
//         this.billingData = data;
//       },
//       (error) => {
//         console.error('Error loading billing data:', error);
//       }
//     );
//   }
// }
