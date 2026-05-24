import { Component, Input } from '@angular/core';
import { NewEnquiry } from '../../models/newEnquiry';

@Component({
  selector: 'app-enquiry-card',
  imports: [],
  templateUrl: './enquiry-card.html',
  styleUrl: './enquiry-card.css',
})

export class EnquiryCard {
    @Input() enquiry!: NewEnquiry;
}
