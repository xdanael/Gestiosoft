import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-cerca-risorsa',
  templateUrl: './cerca-risorsa.component.html',
  styleUrls: ['./cerca-risorsa.component.css'],
    animations: [routerTransition()]
})
export class CercaRisorsaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
