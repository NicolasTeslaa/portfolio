import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  constructor(private el: ElementRef) { }

  toogleMenu() { 
  
    let myTag = this.el.nativeElement.querySelector("#sidebarToggle"); 
    myTag.classList.toggle('sidenav-toggled');  
    document.body.classList.toggle('sidenav-toggled');
  }
  ngOnInit(): void {
  }

}
