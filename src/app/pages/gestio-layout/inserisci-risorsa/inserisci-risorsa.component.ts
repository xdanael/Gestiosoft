import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-inserisci-risorsa',
  templateUrl: './inserisci-risorsa.component.html',
  styleUrls: ['./inserisci-risorsa.component.css'],
    animations: [routerTransition()]
})
export class InserisciRisorsaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
