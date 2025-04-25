import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { NgOptimizedImage } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FloatLabelModule, InputTextModule, FormsModule ,ButtonModule,CardModule, NgOptimizedImage ,PasswordModule ,DividerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string | undefined;
  username: string | undefined;
 router =inject(Router)
  onsubmit(){
    console.log(this.username);
    console.log(this.password);
     this.router.navigate(['/home'])
  }
   
}
