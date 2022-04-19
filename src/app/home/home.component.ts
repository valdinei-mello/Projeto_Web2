import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasServices]
})
export class HomeComponent implements OnInit {

  public ofertas?: Oferta[]

  constructor(private ofertasService: OfertasServices) { }

  ngOnInit(): void {
    //this.ofertas = this.ofertasService.getOfertas()

    this.ofertasService.getOfertas2()
      .then(
        (ofertas: Oferta[]) => { this.ofertas = ofertas },
        (erro: any) => console.log(erro)

        // console.log(this.ofertas)
      )
  }

}
