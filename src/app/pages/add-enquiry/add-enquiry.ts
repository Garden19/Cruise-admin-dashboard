import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from "@angular/forms";
import { NewEnquiry } from '../../models/newEnquiry';
import { EnquiryService } from '../../services/EnquiryService/enquiry-service';

@Component({
  selector: 'app-add-enquiry',
  imports: [ReactiveFormsModule],
  templateUrl: './add-enquiry.html',
  styleUrl: './add-enquiry.css',
})
export class AddEnquiry {

  constructor(
    private enquiryService: EnquiryService,
    private router: Router
  ){}

  addEnquiry = new FormGroup({
    customerName: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    budget: new FormControl(0, Validators.required),
    nights: new FormControl(0, Validators.required),
    travelDate: new FormControl('', Validators.required),
    imageURL: new FormControl('', Validators.required),
  })

  onAddEnquiry() {
    if(this.addEnquiry.invalid) {
      return;
    }

    const newEnquiry: NewEnquiry = {
      customerName: this.addEnquiry.value.customerName ?? '',
      destination: this.addEnquiry.value.destination ?? '',
      status: this.addEnquiry.value.status ?? '',
      budget: this.addEnquiry.value.budget ?? 0,
      nights: this.addEnquiry.value.nights ?? 0,
      travelDate: this.addEnquiry.value.travelDate ?? '',
      imageURL: this.addEnquiry.value.imageURL ?? ''
  }
      this.enquiryService.addEnquiry(newEnquiry);
      this.router.navigate(['/enquiries']);
  }
}