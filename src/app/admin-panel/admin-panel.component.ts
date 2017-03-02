import {Component, OnInit} from "@angular/core";
import {AdminsPanelService} from "./admins-panel.service";
import {FormService} from "../form/form.service";

@Component({
  selector: 'admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  providers: [AdminsPanelService]
})

export class AdminPanelComponent implements OnInit {

  number: number = 0;

  adminPanels: any;
  error: any;

  constructor(private adminPanel: AdminsPanelService) {
  }

  ngOnInit() {
    this.getLoanList();
  }
  getLoanList() {
    this.adminPanel.getLoansList()
      .then(adminPanels => {
        this.adminPanels = adminPanels;
        console.log(adminPanels);
      }).catch(error => {
      this.error = error;
      console.log('error :(((');
    });
  };


  changeStatus(status, id) {
    this.adminPanel.changeStatus(status, id).then(msg => {
      this.getLoanList();
    })

  };


}
