export class Rol {
    // tslint:disable-next-line:variable-name
    constructor(_id = '', name = '', state = true) {
        this._id = _id;
        this.name = name;
        this.state = state;
    }
    // tslint:disable-next-line:variable-name
    _id: string;
    name: string;
    state: boolean;
}
