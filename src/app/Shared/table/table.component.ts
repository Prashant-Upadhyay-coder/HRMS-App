import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableServiceService } from './Service/table-service.service';
 interface Country {
  name?: string;
  code?: string;
}

 interface Representative {
  name?: string;
  image?: string;
}

 interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}
@Component({
  selector: 'app-table',
  imports: [ButtonModule, TableModule,CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  customers!: Customer[];

  first = 0;

  rows = 10;

  constructor(private customerService: TableServiceService) {}

  ngOnInit() {
      this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
  }

  next() {
      this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  pageChange(event: { first: number; rows: number; }) {
      this.first = event.first;
      this.rows = event.rows;
  }

  isLastPage(): boolean {
      return this.customers ? this.first + this.rows >= this.customers.length : true;
  }

  isFirstPage(): boolean {
      return this.customers ? this.first === 0 : true;
  }
}
