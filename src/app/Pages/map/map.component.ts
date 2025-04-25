import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {GoogleMap, MapBicyclingLayer,MapTrafficLayer,MapKmlLayer,MapRectangle,MapTransitLayer} from '@angular/google-maps';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { BreadcrumbComponent } from '../../Shared/breadcrumb/breadcrumb.component';
@Component({
  selector: 'app-map',
  imports: [GoogleMap ,MapBicyclingLayer,MapTrafficLayer,MapKmlLayer,MapRectangle,MapTransitLayer,BreadcrumbComponent,CommonModule,RouterModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent  implements OnInit{
items:MenuItem[]=[];
  ngOnInit(): void {
       this.items = [{ icon: 'pi pi-home', route: '/home/dashboard' }, { label: 'Map', route: '/home/Map' }];

  }
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  
  kmlUrl = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';
  bounds: google.maps.LatLngBoundsLiteral = {
    east: 10,
    north: 10,
    south: -10,
    west: -10,
  };
}
