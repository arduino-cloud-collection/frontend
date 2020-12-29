import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DialogCreationComponent} from '../newcontroller/newcontroller.component';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Controller} from '../controllercard/controller';
import {ControllerService} from '../../services/controller/controller.service';
import {log} from 'util';
import {UpdateCommand} from '@angular/cli/commands/update-impl';
import {ControllerUpdate} from './ControllerUpdate';

@Component({
  selector: 'app-editcontroller',
  templateUrl: './editcontroller.component.html',
  styleUrls: ['./editcontroller.component.css']
})
export class EditcontrollerComponent implements OnInit {

  constructor(private dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const uuid: string = this.route.snapshot.paramMap.get('uuid');
    // TODO: Replace this with a more elegant way.
    localStorage.setItem('uuid', uuid);
    this.dialog.open(DialogEditComponent, {
      width: '300px',
      data: { msg: 'The passwords aren\'t matching.' }
    });
  }

}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: 'dialog-edit.html'
})
export class DialogEditComponent implements OnInit{
  formGroup: FormGroup;
  name: string;
  uuid: string;

  constructor(private controllerService: ControllerService, private router: Router) {
  }

  ngOnInit(): void {
    this.uuid = localStorage.getItem('uuid');
    localStorage.removeItem('uuid');
    this.controllerService.getControllerById(this.uuid).subscribe(result => {
      this.name = result.name;
      this.formGroup = new FormGroup({
        name: new FormControl(this.name, [Validators.required])
      });
    });
  }

  updateController(): void {
    if (this.formGroup.valid){
      const controller: ControllerUpdate = new ControllerUpdate(this.formGroup.value.name);
      this.controllerService.updateController(this.uuid, controller).subscribe(result => {
        this.router.navigate(['controller/' + this.uuid]);
      });
    }
  }
}
