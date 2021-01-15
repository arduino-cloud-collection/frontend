import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Controller} from '../controllercard/controller';
import {UserServiceService} from '../../services/user/user-service.service';
import {ControllerService} from '../../services/controller/controller.service';

@Component({
  selector: 'app-singlecontroller',
  templateUrl: './singlecontroller.component.html',
  styleUrls: ['./singlecontroller.component.css']
})
export class SinglecontrollerComponent implements OnInit {
  controller: Controller;

  constructor(private route: ActivatedRoute, private controllerService: ControllerService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log(params.uuid);
      this.controllerService.getControllerById(params.uuid).subscribe(result => {
        this.controller = new Controller(result.name, result.uuid, 1, 1, result.pins);
      });
    });
  }

}
