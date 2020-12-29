import {Component, Input, OnInit} from '@angular/core';
import {Controller} from './controller';
import {ControllerService} from '../../services/controller/controller.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-controllercard',
  templateUrl: './controllercard.component.html',
  styleUrls: ['./controllercard.component.css']
})
export class ControllercardComponent implements OnInit {
  @Input() controller: Controller;
  active = true;

  constructor(private controllerService: ControllerService, private router: Router) { }

  ngOnInit(): void {
  }
  cardClick(): void {
    this.router.navigate(['/controller/' + this.controller.uuid]);
  }
  controllerRemove(): void {
    this.controllerService.removeController(this.controller.uuid).subscribe(result => {
      this.active = false;
      window.location.href = this.router.url;
    });
  }
}
