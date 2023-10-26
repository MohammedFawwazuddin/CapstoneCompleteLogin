import { Component } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent {
  selectedLocation: number | undefined; 
  selectedProduct: number | undefined; 
  locations: any[] = []; 
  products: any[] = []; 
  productEnabled: boolean = false;

  enableProduct() {
  }

  saveConfiguration() {

    }
}
