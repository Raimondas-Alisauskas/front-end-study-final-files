import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe (params =>{
      this.http.get('https://reqres.in/api/users/' + params.id).subscribe(serverData =>{
  this.user = serverData;
  console.log(this.user);
      });
      });
  }
}
