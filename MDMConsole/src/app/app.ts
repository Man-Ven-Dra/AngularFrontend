import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>Angular + Microservices Demo</h1>
    <button (click)="callService1()">Call Service 2</button>
    <br>
    <button (click)="callService2()">Call Service 3</button>
    <p>{{ message }}</p>
  `
})
export class AppComponent implements OnInit {

  message = '';

  constructor(private http: HttpClient) {}

  callService1() {
    this.http.get('http://localhost:5270/api/service2', { responseType: 'text' })
      .subscribe(res => this.message = res);
  }

  callService2() {
    this.http.get('http://localhost:5200/api/service3', { responseType: 'text' })
      .subscribe(res => this.message = res);
  }

  ngOnInit() {}
}