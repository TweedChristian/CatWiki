import { Component, OnInit } from '@angular/core';
import {cats} from '../cats';
@Component({
  selector: 'app-catlist',
  templateUrl: './catlist.component.html',
  styleUrls: ['./catlist.component.sass']
})
export class CatlistComponent implements OnInit {
  cats = cats;
  constructor() { }

  ngOnInit() {
  }

}
