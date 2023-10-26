import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

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
  public locations: any[] = []; // You can use 'any' type if you're not using a model.
  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.loadLocations();
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
  enableProduct() {
  }

  saveConfiguration() {

    }
}
