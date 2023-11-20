import { Injectable } from '@angular/core';
import { Contacte } from './shared/contacte.model';

@Injectable({
  providedIn: 'root',
})
export class ServeiContacteService {
  private contactes: Contacte[] = [
    {
      id: 1,
      nom: 'Anna Sánchez',
      correu: 'anna@example.com',
      telefon: '123-456-7890',
    },
    {
      id: 2,
      nom: 'Pau Martí',
      correu: 'pau@example.com',
      telefon: '987-654-3210',
    },
    {
      id: 3,
      nom: 'Clara López',
      correu: 'clara@example.com',
      telefon: '555-123-4567',
    },
    {
      id: 4,
      nom: 'Marc Vidal',
      correu: 'marc@example.com',
      telefon: '777-888-9999',
    },
    {
      id: 5,
      nom: 'Eva Ruiz',
      correu: 'eva@example.com',
      telefon: '444-555-6666',
    },
  ];

  getContactes(): Contacte[] {
    return this.contactes;
  }

  getContactById(id: number): Contacte {
    return this.contactes.find(contact => contact.id === id);
  }

  deleteContact(id: number): void {
    const index = this.contactes.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contactes.splice(index, 1);
    }
  }

}
