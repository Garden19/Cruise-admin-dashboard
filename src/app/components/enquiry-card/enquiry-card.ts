import { Component } from '@angular/core';
import data from '../../data/enquiries.json';
@Component({
  selector: 'app-enquiry-card',
  imports: [],
  templateUrl: './enquiry-card.html',
  styleUrl: './enquiry-card.css',
})

export class EnquiryCard {
  enquiries = data.enquiries;
  
}
