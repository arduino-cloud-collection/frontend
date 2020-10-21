import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-userdropdown',
  templateUrl: './userdropdown.component.html',
  styleUrls: ['./userdropdown.component.css']
})
export class UserdropdownComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout_click(): void{
    this.router.navigate(['/logout']);
  }
  settings_click(): void{
    this.router.navigate(['/settings']);
  }

}
