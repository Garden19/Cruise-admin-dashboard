import { Injectable } from '@angular/core';
import { NewEnquiry } from '../models/newEnquiry';
import data from '../data/enquiries.json'

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {

  private enquiries: NewEnquiry[] = data.enquiries;

  getEnquiries(): NewEnquiry[] {
    return this.enquiries;
  }

  addEnquiry(enquiry: NewEnquiry): void {
    this.enquiries.push(enquiry);
  }

}