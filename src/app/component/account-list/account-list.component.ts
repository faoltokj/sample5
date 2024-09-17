import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../service/account.service';
import { Account } from '../../account';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'account-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './account-list.component.html',
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent implements OnInit{

  accounts: Account[] = [];


  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccounts();
    this.updatePagination();
  }

  getAccounts(): void {
    this.accountService.getAllAccounts().subscribe(data => {
      this.accounts = data;
      console.log("Accounts: ", this.accounts);  
    });
  }


  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Brown', email: 'alice@example.com' },
    { id: 4, name: 'Bob White', email: 'bob@example.com' },
    { id: 5, name: 'Chris Blue', email: 'chris@example.com' },
    { id: 6, name: 'David Green', email: 'david@example.com' },
    { id: 7, name: 'Eve Black', email: 'eve@example.com' },
    { id: 8, name: 'Frank Red', email: 'frank@example.com' },
    { id: 9, name: 'Grace Pink', email: 'grace@example.com' },
    { id: 10, name: 'Hank Yellow', email: 'hank@example.com' },
  ];

  filteredUsers = [...this.users]; // Copy of users for filtering
  paginatedUsers: any[] = []; // Subset of users for pagination
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 1;
  searchTerm: string = '';
  Math = Math; // Expose Math object to the template


  updatePagination() {
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = this.currentPage * this.itemsPerPage;
    this.paginatedUsers = this.filteredUsers.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  onSearch(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.searchTerm = input.trim().toLowerCase();
    this.filterUsers();
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchTerm) ||
      user.email.toLowerCase().includes(this.searchTerm)
    );
    this.currentPage = 1; // Reset to first page after filtering
    this.updatePagination();
  }



}
