import { Component, OnInit } from '@angular/core';
import { ServeiContacteService } from '../servei-contacte.service';
import { Contacte } from '../shared/contacte.model';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-llista-contactes',
  templateUrl: './llista-contactes.component.html',
  styleUrls: ['./llista-contactes.component.css']
})
export class LlistaContactesComponent implements OnInit {
contactes:Contacte[];
newContact: Contacte = { id: 0, nom: '', correu: '', telefon: '' };

  constructor(private serveiContacte: ServeiContacteService) { }

  ngOnInit(): void {
    this.contactes = this.serveiContacte.getContactes();

  }
  deleteContact(contacte: Contacte): void {
    const index = this.contactes.indexOf(contacte);
    if (index !== -1 ) {
      this.contactes.splice(index, 1);
    }
  }
  addContact(): void {
    this.contactes.push({ ...this.newContact, id: this.contactes.length + 1 });

    this.newContact = { id: 0, nom: '', correu: '', telefon: '' };
  }

}
