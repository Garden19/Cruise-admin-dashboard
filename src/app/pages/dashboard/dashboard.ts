import { Component } from '@angular/core';
import { DashboardApiService } from '../../services/DashboardApiService/dashboard-api-service';
import { TravelUpdate } from '../../models/travelUpdate';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  travelUpdates: TravelUpdate[] = []
  constructor(private DashboardApiService: DashboardApiService){}

  ngOnInit(){
        this.DashboardApiService.getTravelUpdates().subscribe((travelUpdates: TravelUpdate[]) => {
          this.travelUpdates = travelUpdates
        })
  }
}
