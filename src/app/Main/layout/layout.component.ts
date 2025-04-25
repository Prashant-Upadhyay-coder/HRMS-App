import {Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { SidebarComponent } from '../../Shared/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule,SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent{
 
}
