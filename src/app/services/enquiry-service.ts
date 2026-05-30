import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NewEnquiry } from '../models/newEnquiry';
import data from '../data/enquiries.json';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  private enquiriesSubject = new BehaviorSubject<NewEnquiry[]>(data.enquiries);

  enquiries$ = this.enquiriesSubject.asObservable();

  addEnquiry(enquiry: NewEnquiry): void {
    const currentEnquiries = this.enquiriesSubject.value;
    const updatedEnquiries = [...currentEnquiries, enquiry];

    this.enquiriesSubject.next(updatedEnquiries);
  }

  removeEnquiry(enquiryToRemove: NewEnquiry): void {
    const currentEnquiries = this.enquiriesSubject.value;

    const updatedEnquiries = currentEnquiries.filter((enquiry) => {
      return enquiry !== enquiryToRemove;
    });

    this.enquiriesSubject.next(updatedEnquiries);
  }

  updateStatus(enquiryToUpdate: NewEnquiry, newStatus: string): void {
    const currentEnquiries = this.enquiriesSubject.value;

    const updatedEnquiries = currentEnquiries.map((enquiry) => {
      if (enquiry === enquiryToUpdate) {
        return { ...enquiry, status: newStatus };
      }
      return enquiry;
    });

    this.enquiriesSubject.next(updatedEnquiries);
  }
}