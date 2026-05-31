import { Component } from '@angular/core';
import { EnquiryCard } from '../../components/enquiry-card/enquiry-card';
import { EnquiryService } from '../../services/EnquiryService/enquiry-service';
import { NewEnquiry } from '../../models/newEnquiry';
@Component({
  selector: 'app-enquiries',
  imports: [EnquiryCard],
  templateUrl: './enquiries.html',
  styleUrl: './enquiries.css',
})
export class Enquiries {
  enquiries: NewEnquiry[] = [];

  constructor(private enquiryService: EnquiryService) {
    this.enquiryService.enquiries$.subscribe((enquiries) => {
      this.enquiries = enquiries;
    });
  }
}