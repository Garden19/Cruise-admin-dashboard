import { Component, Inject } from '@angular/core';
import data from '../../data/enquiries.json';
import { EnquiryCard } from '../../components/enquiry-card/enquiry-card';
import { EnquiryService } from '../../services/enquiry-service';
import { NewEnquiry } from '../../models/newEnquiry';
@Component({
  selector: 'app-enquiries',
  imports: [EnquiryCard],
  templateUrl: './enquiries.html',
  styleUrl: './enquiries.css',
})
export class Enquiries {
  enquiries: NewEnquiry[] = [];
  
  getEnquiries(): NewEnquiry[] {
    return this.enquiries
  }

  addEnquiry(enquiry: NewEnquiry): void {
    this.enquiries.push(enquiry)
  }

  constructor(private enquiryService: EnquiryService) { 
    this.enquiries = this.enquiryService.getEnquiries();
  }
}
