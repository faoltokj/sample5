import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Account } from '../../account';

@Component({
  selector: 'app-deposit-amount',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './deposit-amount.component.html',
  styleUrl: './deposit-amount.component.scss'
})
export class DepositAmountComponent {

  accounts: Account = new Account();

  onSubmit(form: any) {
    
  }

}
