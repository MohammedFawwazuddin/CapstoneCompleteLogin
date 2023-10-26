import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent  implements OnInit{
  selectedLocation: number | undefined; 
  selectedProduct: number | undefined; 
  products: any[] = []; 
  productEnabled: boolean = false;
  public locations: any[] = [];
  
  constructor(private locationService: LocationService, private productService: ProductService  ) {}

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
  }

  saveConfiguration() {

    }
}
