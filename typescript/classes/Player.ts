import {IsPlayer} from '../interfaces/IsPlayer'
export class Player implements IsPlayer{
    constructor(
        public name: string,
        public age: number,
        readonly country: string,
        readonly birth_place: string
    ){}

    play(){
        console.log(`${this.name} from ${this.country} is playing`);
    }
}