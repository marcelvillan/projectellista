import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServeiContacteService } from '../servei-contacte.service';
import { Contacte } from '../shared/contacte.model';

@Component({
  selector: 'app-detalls-contacte',
  templateUrl: './detalls-contacte.component.html',
  styleUrls: ['./detalls-contacte.component.css']
})
export class DetallsContacteComponent implements OnInit {
  contactId: number;
  contact: Contacte;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serveiContacte: ServeiContacteService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactId = +params['id'];
      this.contact = this.serveiContacte.getContactById(this.contactId);
    });
  }

  goBack(): void {
    this.router.navigate(['/contactes']);
  }

  deleteContact(): void {
    this.serveiContacte.deleteContact(this.contactId);
    this.router.navigate(['/contactes']);
  }
}
