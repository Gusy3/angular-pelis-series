import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  public search: string;

  constructor(
    private _router: Router
  ){
    this.search = '';
  }

  ngOnInit(): void {
  }

  goSearch(){

    this._router.navigate(['/buscar'], {queryParams: {title: this.search}});

  }

}
