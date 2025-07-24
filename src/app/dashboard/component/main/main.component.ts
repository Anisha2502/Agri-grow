import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../../services/application-state.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
constructor(public appState: ApplicationStateService) {}

farmerName = '';

  ngOnInit() {
    this.farmerName = localStorage.getItem('farmerName') || '';
  }
}
