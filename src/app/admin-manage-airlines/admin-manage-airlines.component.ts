import { Component, OnInit } from '@angular/core';
import Airline from '../entity/Airline';

@Component({
  selector: 'app-admin-manage-airlines',
  templateUrl: './admin-manage-airlines.component.html',
  styleUrls: ['./admin-manage-airlines.component.scss']
})
export class AdminManageAirlinesComponent implements OnInit {
  airline: Airline = new Airline();
  constructor() { }

  ngOnInit(): void {
  }

  addAirline() {
    
  }
}
