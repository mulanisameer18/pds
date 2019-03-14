import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-name-resolution',
  templateUrl: './name-resolution.component.html',
  styleUrls: ['./name-resolution.component.scss']
})
export class NameResolutionComponent implements OnInit {

  site = '';
  siteIP = '';
  constructor() {}
  DNS = [{
      name: 'localhost',
      ip: '127.0.0.1'
    },
    {
      name: 'https://www.aiktc.org',
      ip: '172.16.16.1'
    },
    {
      name: 'https://www.google.com',
      ip: '123.168.0.1'
    },
    {
      name: 'https://www.yahoo.co.in',
      ip: '192.0.0.1'
    }
  ];
  ngOnInit() {}

  callDns() {
    let index = -1;
    this.DNS.forEach((e, i) => {
      if (e.name === this.site) {
        this.siteIP = e.ip;
      }
    });
  }

}
