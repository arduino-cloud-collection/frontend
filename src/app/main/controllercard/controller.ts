import {Pin} from '../pinlist/pin';

export class Controller{
  constructor(public name: string, public uuid: string, public cols: number, public rows: number, public pins: Pin[]) {
  }
}
