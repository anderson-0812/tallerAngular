export class PermisoRol {
    // tslint:disable-next-line:variable-name
    constructor(_id = '', day = '', start_time = '', end_time = '', rol = '', state = true) {
      this._id = _id;
      this.day = day;
      this.start_time = start_time;
      this.end_time = end_time;
      this.rol = rol;
      this.state = state;
    }

    // tslint:disable-next-line:variable-name
    _id: string;
    day: string;
    // tslint:disable-next-line:variable-name
    start_time: string;
    // tslint:disable-next-line:variable-name
    end_time: string;
    rol: string;
    state: boolean;
  }
