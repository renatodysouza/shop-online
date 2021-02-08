import { Component, OnInit } from '@angular/core';
import { faEnvelope, faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {
  faEnvelop = faEnvelope;
  faphone = faPhone;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faPinterest = faPinterest;
  faUser = faUser;
  flag = 'en';
  constructor() { }

  ngOnInit(): void {
  }

  setFlag(event) {
    this.flag = event;

  }

}
