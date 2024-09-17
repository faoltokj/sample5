import { Component } from '@angular/core';
import { AccountService } from '../../service/account.service';
import { Account } from '../../account';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  accounts: Account = new Account();

  constructor(private accountService:AccountService){}

  onSubmit(){
    this.saveAccount();
  }

  saveAccount(){
    this.accountService.createAccount(this.accounts).subscribe(data=>{
      console.log(data);   
    })
  }

}
