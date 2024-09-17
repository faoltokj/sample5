import { Component, ElementRef, Renderer2 } from '@angular/core';
import { AccountListComponent } from "../account-list/account-list.component";
import { CreateAccountComponent } from "../create-account/create-account.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AccountListComponent, CreateAccountComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  constructor(private el: ElementRef, private renderer: Renderer2){}

  setActive = (id: string) => {
    const navLink = this.el.nativeElement.querySelectorAll('.navItems a');
    navLink.forEach((e: HTMLElement) => {
      this.renderer.removeClass(e, 'active');
    });
    const activeLink = this.el.nativeElement.querySelector(
      `.navItems a[href='#${id}']`
    );
    this.renderer.addClass(activeLink, 'active');
  };

}
