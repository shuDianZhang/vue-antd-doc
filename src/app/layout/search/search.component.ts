import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
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