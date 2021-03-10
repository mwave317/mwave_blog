import { Component, OnInit } from '@angular/core';
declare var FroalaPages: any;
declare var  window: any;

@Component({
  selector: 'app-froala-page-builder',
  templateUrl: './froala-page-builder.component.html',
  styleUrls: ['./froala-page-builder.component.css']
})
export class FroalaPageBuilderComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    window.pages = new FroalaPages("#froalapages", { key: "" });
  }

}
