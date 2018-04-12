import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drawer-component',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})


export class DrawerComponent implements OnInit {
  options = [];
  selectedOption;

  ngOnInit() {
    this.options = [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'disabled', label: 'Disabled', disabled: true }
    ];
    this.selectedOption = this.options[0];
  }
}