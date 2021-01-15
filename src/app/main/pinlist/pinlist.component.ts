import {Component, Input, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Pin} from './pin';

@Component({
  selector: 'app-pinlist',
  templateUrl: './pinlist.component.html',
  styleUrls: ['./pinlist.component.css']
})
export class PinlistComponent implements OnInit {
  @Input() pins: Pin[];
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      this.pins.forEach(function(pin) {
       pin.rows = 1;
       pin.cols = 1;
      });
      return this.pins;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    console.log(this.pins);
  }
}

