import { Component, OnInit } from '@angular/core';
import { ProuteService } from '../_services/proute.service';
import { User } from '../_models/user';

@Component({
  selector: 'hm-proute',
  templateUrl: './proute.component.html',
  styleUrls: ['./proute.component.scss']
})
export class ProuteComponent implements OnInit {
  public users: User[];

  constructor(private prouteService: ProuteService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.prouteService.getAll().subscribe(data => {
      this.users = data;
      console.log(data)
    })
  }

}
