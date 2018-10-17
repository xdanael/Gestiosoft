import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PageHeader} from '../../interfaces/page-header';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {
    @Input() heading: string;
    @Input() icon: string;
    @Input() path: string;
    @Input() pageheaders: PageHeader[];




  constructor() { }

  ngOnInit() {
  }

}
