import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pinlist',
  templateUrl: './pinlist.component.html',
  styleUrls: ['./pinlist.component.css']
})
export class PinlistComponent implements OnInit {
  @Input() pins: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
