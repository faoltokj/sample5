import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Account } from '../account';
import { catchError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:8090/api/accounts/';
  private allAcountUrl = 'http://localhost:8090/api/accounts/all/accounts';
  private createUrl = 'http://localhost:8090/api/accounts/add/account';
  private getByIdUrl = 'http://localhost:8090/api/accounts/add/account';

  constructor(private httpClient: HttpClient) {}

  getAllAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${this.allAcountUrl}`).pipe(
      tap(data => console.log('Received data:', data)),
      catchError(error => {
        console.error('Error occurred:', error);
        throw error; 
      })
    );
  }

  createAccount(account : Account):Observable<Account>{
    return this.httpClient.post<Account>(`${this.createUrl}`,account);
  }

  getAccountById(id: number) : Observable<Account>{
    return this.httpClient.get<Account>(`${this.baseUrl}/account/${id}`)
  }

  depositeAmount(){}
  

  }
