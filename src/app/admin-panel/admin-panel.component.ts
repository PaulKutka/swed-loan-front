import {Component, OnInit, Input, HostBinding} from "@angular/core";
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

  public isCollapsedContent:boolean = false;

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
    this.adminPanel.changeStatus(status, id);
    this.isCollapsedContent = !this.isCollapsedContent
  };

  @HostBinding('style.height')
  private height:string;
  // shown
  @HostBinding('class.in')
  @HostBinding('attr.aria-expanded')
  private isExpanded:boolean = true;
  // hidden
  @HostBinding('attr.aria-hidden')
  private isCollapsed:boolean = false;
  // stale state
  @HostBinding('class.collapse')
  private isCollapse:boolean = true;
  // animation state
  @HostBinding('class.collapsing')
  private isCollapsing:boolean = false;

  @Input()
  private set collapse(value:boolean) {
    this.isExpanded = value;
    this.toggle();
  }

  private get collapse():boolean {
    return this.isExpanded;
  }

  toggle() {
    if (this.isExpanded) {
      this.hide();
    } else {
      this.show();
    }
  }

  hide() {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.isExpanded = false;
    this.isCollapsed = true;
    setTimeout(() => {
      this.height = '0';
      this.isCollapse = true;
      this.isCollapsing = false;
    }, 4);
  }

  show() {
    this.isCollapse = false;
    this.isCollapsing = true;

    this.isExpanded = true;
    this.isCollapsed = false;
    setTimeout(() => {
      this.height = 'auto';

      this.isCollapse = true;
      this.isCollapsing = false;
    }, 4);
  }


}
