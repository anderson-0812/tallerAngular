export class Sala {
    constructor(_id = '', name = '', description = '', state = true) {
      this._id = _id;
      this.name = name;
      this.description = description;
      this.state = state;
    }
  
    _id: string;
    name: string;
    description: string;
    state: boolean;
  }