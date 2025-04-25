import { Component, inject, OnInit } from '@angular/core';
import { ChartComponent } from '../../Shared/chart/chart.component';
import { TableComponent } from '../../Shared/table/table.component';
import { MenuItem } from 'primeng/api';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';
import { BreadcrumbComponent } from '../../Shared/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-dashboard',
  imports: [ChartComponent,TableComponent,BreadcrumbComponent,RouterModule,CommonModule,FormsModule,SelectButton],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{
  items!: MenuItem[];
  home!: MenuItem ;
  stateOptions: any[] = [{ label: 'Today', value: 'today' },{ label: 'Week', value: 'week' },{ label: 'Month', value: 'month' }];

  
  ngOnInit() {
      this.items = [{ icon: 'pi pi-home', route: '/home/dashboard' }, { label: 'Dashboard', route: '/home/dashboard' }];
  }


}
