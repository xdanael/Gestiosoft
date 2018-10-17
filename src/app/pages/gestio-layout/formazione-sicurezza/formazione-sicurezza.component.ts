import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-formazione-sicurezza',
  templateUrl: './formazione-sicurezza.component.html',
  styleUrls: ['./formazione-sicurezza.component.css'],
    animations: [routerTransition()]
})
export class FormazioneSicurezzaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
