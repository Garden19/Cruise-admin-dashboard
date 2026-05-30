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

  isEditing = false;
  selectedStatus = '';

  @Input() enquiry!: NewEnquiry;
  
  removeEnquiry(){
    this.enquiryService.removeEnquiry(this.enquiry);
  }

  startEditing(){
    this.isEditing = true;
  }

  statusChanged(event: Event){
    const select = event.target as HTMLSelectElement;
    this.selectedStatus = select.value;
  }

  saveStatus(){
    this.enquiryService.updateStatus(this.enquiry, this.selectedStatus);
    this.isEditing = false;
  }
}
