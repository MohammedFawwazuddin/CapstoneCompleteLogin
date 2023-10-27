import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';
import { ProductService } from '../product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  selectedLocation: any ; // Set initial message
  selectedProduct: any ; // Set initial message
  products:any[] = [];
  productEnabled: boolean = false;
  locations: any[] = [];
  data: any;


  constructor(
    private router: Router,
    private locationService: LocationService,
    private productService: ProductService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadLocations();
    this.loadProducts();
  }

  loadLocations() {
    this.locationService.getLocations().subscribe(
      (locations) => {
        this.locations = locations;
      },
      (error) => {
        console.error('Error loading locations:', error);
      }
    );
  }

  loadProducts() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  enableProduct() {
    this.productEnabled = true;
  }

  saveConfiguration() {
    if (this.selectedProduct !== 'Select a Product' && this.selectedLocation !== 'Select a Location') {
      const billingData = {
        productName: this.selectedProduct.name,
        location: this.selectedLocation.location,
        productId: this.selectedProduct.id,
        productPrice: this.selectedProduct.price,
      };
      console.log(billingData);
      this.router.navigate(['/billing', billingData]);
    } else {
      console.error('Please select a product and a location before saving.');
    }
  }
  
  
}
