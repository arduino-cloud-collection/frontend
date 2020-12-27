import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Controller} from '../controllercard/controller';
import {ControllerService} from '../../services/controller/controller.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  /** Based on the screen size, switch from standard to one column per row */
  cards = [];

  constructor(private breakpointObserver: BreakpointObserver, private controllerService: ControllerService) {}

  ngOnInit(): void {
    this.controllerService.getControllers().subscribe(result => {
      Object.keys(result).map(key => {
        this.cards.push(new Controller(result[key].name, result[key].uuid, this.generateCols(), this.generateRows()));
      });
    });
    console.log(this.cards);
  }
  generateCols(): number {
    const count: number = this.cards.length + 1;
    if (count % 4 === 0){
      return 1;
    }
    else if (count % 3 === 0){
      return 1;
    }
    else if (count % 2 === 0 && count % 4 !== 0){
      return 1;
    }
    else {
      return 2;
    }
  }
  generateRows(): number {
    const count: number = this.cards.length + 1;
    if (count % 4 === 0){
      return 2;
    }
    else if (count % 3 === 0){
      return 2;
    }
    else if (count % 2 === 0 && count % 4 !== 0){
      return 1;
    }
    else {
      return 1;
    }
  }
}
