import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  characters = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe(res => {
        console.log(res);
        this.characters = res;
      })
  }

}
