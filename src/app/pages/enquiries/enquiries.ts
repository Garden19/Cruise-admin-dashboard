import { Component } from '@angular/core';
import data from '../../data/enquiries.json';
import { EnquiryCard } from '../../components/enquiry-card/enquiry-card';
@Component({
  selector: 'app-enquiries',
  imports: [EnquiryCard],
  templateUrl: './enquiries.html',
  styleUrl: './enquiries.css',
})
export class Enquiries {
    enquiries = data.enquiries;
}
