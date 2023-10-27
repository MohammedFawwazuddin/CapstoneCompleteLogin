import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
import { MatDialog } from '@angular/material/dialog';
import { ProductDetailsDialogComponent } from '../product-details-dialog/product-details-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent implements OnInit {
  products: any[] = [];
  selectedProduct: any; 

  constructor(private http: HttpClient, private router: Router,private dialog: MatDialog) {}

  ngOnInit() {
    this.http.get('http://localhost:8080/api/selection').subscribe((data: any) => {
      this.products = data;
      console.log(this.products);
    });
  }
  
  selectProduct(product: any) {
    this.selectedProduct = product;
  }

  goToConfigurationPage() {
    if (this.selectedProduct) {
      this.router.navigate(['/configuration', this.selectedProduct.id]);
    }
  }

  openDetailsDialog(product: any): void {
    const dialogRef = this.dialog.open(ProductDetailsDialogComponent, {
      width: '400px', 
      data: product, 
    });
  }
  openProductDetails(selectedProduct: any): void {
    this.router.navigate(['/product-details', selectedProduct.id]);
  }
}
