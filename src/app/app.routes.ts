import { Routes } from '@angular/router';
import { LayoutComponent } from './Main/layout/layout.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:"",redirectTo:'login',pathMatch:'full'},
    {path:"login", component:LoginComponent,title:"Login"},
    {path:"home", component:LayoutComponent , title:"Home" ,children:[
        {path:"", redirectTo:'dashboard',pathMatch:'full'},
        {path:"dashboard",  title:'Dashboard',  loadComponent: () => import('./Pages/dashboard/dashboard.component').then(m => m.DashboardComponent)}, 
        {path: "employee", title:'Employee', loadComponent: () => import('./Pages/employee/employee.component').then(m => m.EmployeeComponent) },
        {path: "map",  title:'Map', loadComponent: () => import('./Pages/map/map.component').then(m => m.MapComponent) },
        {path: "video",  title:'Video', loadComponent: () => import('./Pages/video/video.component').then(m => m.VideoComponent) }
          
    ]},
 
];
