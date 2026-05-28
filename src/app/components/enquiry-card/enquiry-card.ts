import { Component, Input } from '@angular/core';
import { NewEnquiry } from '../../models/newEnquiry';
import { EnquiryService } from '../../services/enquiry-service';

@Component({
  selector: 'app-enquiry-card',
  imports: [],
  templateUrl: './enquiry-card.html',
  styleUrl: './enquiry-card.css',
})

export class EnquiryCard {

  constructor(private enquiryService: EnquiryService){

  }

  @Input() enquiry!: NewEnquiry;
  
  removeEnquiry(){
    this.enquiryService.removeEnquiry(this.enquiry);
  }
}
