import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private notifyService : NotificationService) { }

  ngOnInit(): void {
  }

  showToasterSuccess() {
    this.notifyService.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  }

  showToasterError() {
    this.notifyService.showError("Loggin eroor", "ItSolutionStuff.com")
  }

  showToasterInfo() {
    this.notifyService.showInfo("This is info", "ItSolutionStuff.com")
  }

  showToasterWarning() {
    this.notifyService.showWarning("This is warning", "ItSolutionStuff.com")
  }

}
