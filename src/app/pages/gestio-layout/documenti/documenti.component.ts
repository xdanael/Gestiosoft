import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-documenti',
  templateUrl: './documenti.component.html',
  styleUrls: ['./documenti.component.css'],
    animations: [routerTransition()]
})
export class DocumentiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
