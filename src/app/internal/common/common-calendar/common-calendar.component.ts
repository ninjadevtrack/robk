import {Component, OnInit} from '@angular/core';
import {AuthStorageService} from '../../../core/common/auth-storage.service';
import { Consts } from '../../../core/common/config.service';
import {Role} from '../../../core/user/model/role.enum';

@Component({
  selector: 'app-root-calendar',
  templateUrl: './common-calendar.component.html',
  styleUrls: ['./common-calendar.component.scss']
})
export class CommonCalendarComponent implements OnInit {

  mainRole: Role;
  roles: typeof Role = Role;


  constructor(
      private _session: AuthStorageService
  ) {
    const roles = this._session.getItem(Consts.USER_ROLES);

    if (roles.includes(Role.CLIENT)) {
      this.mainRole = Role.CLIENT;
    } else if (roles.includes(Role.TEACHER)) {
      this.mainRole = Role.TEACHER;
    } else if (roles.includes(Role.STUDENT)) {
      this.mainRole = Role.STUDENT;
    } else {
      this.mainRole = Role.GENERAL_USER;
    }

  }

  ngOnInit() {

  }

}
