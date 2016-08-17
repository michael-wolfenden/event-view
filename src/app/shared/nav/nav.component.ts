import { Component, OnInit } from '@angular/core';

import { MessageService, ModalService } from '../';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  moduleId: module.id,
  selector: 'ev-nav',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit() {
    this.menuItems = [
      { caption: 'Dashboard', link: ['/dashboard'] },
      { caption: 'Speakers', link: ['/speakers'] },
      { caption: 'Sessions', link: ['/sessions'] },
      { caption: 'Login', link: ['/login'] },
    ];
  }

  constructor(
    private messageService: MessageService,
    private modalService: ModalService) {
  }

  resetDb() {
    let msg = 'Are you sure you want to reset the database?';
    this.modalService.activate(msg).then(responseOK => {
      if (responseOK) {
        this.messageService.resetDb();
      }
    });
  }
}
