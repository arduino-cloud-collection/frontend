import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-controllercard',
  templateUrl: './controllercard.component.html',
  styleUrls: ['./controllercard.component.css']
})
export class ControllercardComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
