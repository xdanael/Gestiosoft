import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-cerca-ente',
  templateUrl: './cerca-ente.component.html',
  styleUrls: ['./cerca-ente.component.css'],
    animations: [routerTransition()]
})
export class CercaEnteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
