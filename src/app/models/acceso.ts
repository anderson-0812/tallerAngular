export class Acceso {
    constructor(_id = '', date= '', hour= '', user= '', sala= '', typeAccess= '') {
        this._id = _id;
        this.date = date;
        this.hour = hour;
        this.user = user;
        this.sala = sala;
        this.typeAccess = typeAccess;
    }

    _id: string;
    date: string;
    hour: string;
    user: string;
    sala: string;
    typeAccess: string;
}
