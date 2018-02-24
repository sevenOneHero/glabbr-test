import { Component, OnInit, OnDestroy } from '@angular/core';


// The base component class that every other component in our project
// should extend from
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit, OnDestroy {

  mActive = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.mActive = false;
  }

}
