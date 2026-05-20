import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
