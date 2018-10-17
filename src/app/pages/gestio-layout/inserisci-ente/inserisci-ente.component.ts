import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-inserisci-ente',
  templateUrl: './inserisci-ente.component.html',
  styleUrls: ['./inserisci-ente.component.css'],
    animations: [routerTransition()]
})
export class InserisciEnteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
