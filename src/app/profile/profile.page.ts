import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profileId: string;

  character;
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
    ) { }

  ngOnInit() {
    
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get<any>('https://jsonplaceholder.typicode.com/users/' + this.profileId)
    .subscribe(res=>this.character=res)
  }

}

