import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-select-page',
  templateUrl: './select-page.component.html',
  styleUrls: ['./select-page.component.css']
})
export class SelectPageComponent implements OnInit {
  quotes: any[] = []; // Define an array to store the fetched data
  constructor(private dataService: DataService, private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from the database when the component is initialized
    this.dataService.getData().subscribe(
      (response: any) => {
        console.log(response);
        this.quotes = response; // Store the fetched data in the 'data' array
      }
    );
  }
  customerName: string = '';
  accountStatus: string = 'New';
  quoteName: string = '';
  quoteOwner: string = '';

  generateUniqueQuoteId(): string {
    const timestamp: number = Date.now();
    const randomNumber: number = Math.floor(Math.random() * 10000); // You can adjust the range as needed
    const quoteId: string = `Q${timestamp}-${randomNumber}`;
    return quoteId;
  }

  onSubmit() {
    const uniqueQuoteId = this.generateUniqueQuoteId();
    const data = {
      customerName: this.customerName,
      accountStatus: this.accountStatus,
      quoteName: this.quoteName,
      quoteOwner: this.quoteOwner,
      quoteId: uniqueQuoteId // Include the quoteId in the data
    };

    this.http.post('http://localhost:8080/api/selectpage', data).subscribe(
      (response: any) => {
        console.log('Data saved successfully', response);
      }
    );
  }
}
