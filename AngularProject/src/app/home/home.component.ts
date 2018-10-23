import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  views = [0,0,0,0];
  data: any;
  users: any = [];
  
  constructor(private http:HttpClient ) { }

  ngOnInit() {
this.http.get('https://reqres.in/api/users').subscribe(serverData =>{
  this.data = serverData;
  this.users = this.data.data;
  console.log(this.users);
  
});

  }

}
