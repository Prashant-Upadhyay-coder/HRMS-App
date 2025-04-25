import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../Shared/table/table.component';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../../Shared/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-employee',
  imports: [TableComponent,BreadcrumbComponent,RouterModule,CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent  implements OnInit{
  items!: MenuItem[] ;

  ngOnInit() {
      this.items = [{ icon: 'pi pi-home', route: '/home/dashboard' }, { label: 'Employee', route: '/home/employee' }];
  }
}
