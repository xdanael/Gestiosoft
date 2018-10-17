import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-cerca-piano-formativo',
  templateUrl: './cerca-piano-formativo.component.html',
  styleUrls: ['./cerca-piano-formativo.component.css'],
    animations: [routerTransition()]
})
export class CercaPianoFormativoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
