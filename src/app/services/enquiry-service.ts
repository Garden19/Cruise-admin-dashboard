import { Injectable } from '@angular/core';
import { NewEnquiry } from '../models/newEnquiry';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {

  private enquiries: NewEnquiry[] = [];

  getEnquiries(): NewEnquiry[] {
    return this.enquiries;
  }

  addEnquiry(enquiry: NewEnquiry): void {
    this.enquiries.push(enquiry);
  }

}