import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-inserisci-piano-formativo',
  templateUrl: './inserisci-piano-formativo.component.html',
  styleUrls: ['./inserisci-piano-formativo.component.css'],
    animations: [routerTransition()]
})
export class InserisciPianoFormativoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
