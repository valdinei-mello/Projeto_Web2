import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[OfertasServices]
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasServices) { }

  ngOnInit(): void {
   console.log( this.ofertasService.getOfertas())

  }

}
