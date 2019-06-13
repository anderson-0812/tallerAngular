export class User {
    constructor(_id = '', firstName = '', secondName = '', firstSurname = '', secondSurname = ''
    ,           email = '', username = '', password = '', rol = 'string', state = true) {

        this._id = _id;
        this.firstName = firstName;
        this.secondName = secondName;
        this.firstSurname = firstSurname;
        this.secondSurname = secondSurname;
        this.email = email;
        this.username = username;
        this.password = password;
        this.rol = rol;
        this.state = state;
    }
// OJO estos nombres deben ser los mismos que tenga en mi modelo en el rest node
    _id: string;
    firstName: string;
    secondName: string;
    firstSurname: string;
    secondSurname: string;
    email: string;
    username: string;
    password: string;
    rol: string;
    state: boolean;
}


