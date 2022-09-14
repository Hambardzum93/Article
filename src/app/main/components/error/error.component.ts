import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../admin/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  goHome(){
    if (this.auth.isAuthenticated()){
      this.auth.logout();
      this.router.navigate(['/']);
    }
    this.router.navigate(['/']);
  }

}
