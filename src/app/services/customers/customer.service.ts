import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

export interface Customer {
  id?: string;
  title: string;
  email: string;
  region: string;
  country: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor() {}

  save(customer: Customer) {
    const customers = this.getCustomers();
    customer.id = uuidv4();
    customers.push(customer);
    localStorage.setItem('customers', JSON.stringify(customers));
  }

  getCustomers(): Customer[] {
    const customer = localStorage.getItem('customers');

    if (customer) {
      return JSON.parse(customer);
    }

    return [];
  }
}
