import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import {SharedModule } from 'primeng/api';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToggleSwitch } from 'primeng/toggleswitch';
@Component({
  selector: 'app-sidebar',
  imports: [DrawerModule, ButtonModule, AvatarModule ,SharedModule ,RouterModule, CommonModule,NgOptimizedImage,FormsModule,ToggleSwitch],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  implements OnInit{
  isMobile = false;
  checked: boolean = false;
  
  constructor(private cd: ChangeDetectorRef) {}
  
  @HostListener('window:resize', [])

  ngOnInit() {
    // Initialize dark mode
    const savedMode = localStorage.getItem('darkMode');
    this.checked = savedMode !== null 
      ? savedMode === 'true'
      : window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
    this.applyDarkMode(this.checked);
  }

  applyDarkMode(enable: boolean) {
    const htmlElement = document.documentElement;
    
    // Clear all possible theme classes first
    htmlElement.classList.remove('p-dark');
    htmlElement.removeAttribute('data-theme');
    
    if (enable) {
      htmlElement.classList.add('p-dark');
      htmlElement.setAttribute('data-theme', 'dark');
    }
    
    localStorage.setItem('darkMode', String(enable));
    this.cd.detectChanges();
  }
  
  toggleDarkMode(isDark: boolean) {
    this.checked = isDark;
    this.applyDarkMode(isDark);
  }

 
}
