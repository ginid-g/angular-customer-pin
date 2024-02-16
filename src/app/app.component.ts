import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerFormComponent } from './components/customer-form/customer-form.component';

import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ModalModule, CustomerFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [BsModalService],
})
export class AppComponent {
  title = 'angular-customer-pin';

  constructor(private modalService: BsModalService) {}

  addCustomer() {
    const modal = this.modalService.show(CustomerFormComponent);
  }
}
