import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TravelUpdate } from '../../models/travelUpdate';

@Injectable({
  providedIn: 'root',
})
export class DashboardApiService {
  private http = inject(HttpClient);

  getTravelUpdates() {
    return this.http.get<TravelUpdate[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
