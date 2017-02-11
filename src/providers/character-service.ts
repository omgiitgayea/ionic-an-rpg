import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService {
    // keep as any until I make a character class
    charArray: Array<any>;

    constructor(public http: Http) {
        this.charArray = [{name: "Joe"}, {name: "Sal"}, {name: "Murr"}, {name: "Q"}];
    }

    addNewChar(newChar: any): void {
        console.log(newChar.name);
        this.charArray.push(newChar);
    }

}
