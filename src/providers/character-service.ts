import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs";
import {
    AuthProviders, AuthMethods, AngularFireAuth, FirebaseAuthState, AngularFire,
    FirebaseListObservable
} from "angularfire2";

@Injectable()
export class CharacterService {
    // keep as any until I make a character class
    charArray: Array<any>;
    private authState: FirebaseAuthState;
    users: FirebaseListObservable<any[]>;

    charArraySubject = new Subject<any>();
    charArraySubject$ = this.charArraySubject.asObservable();

    amLoggedIn = new Subject<any>();
    amLoggedIn$ = this.amLoggedIn.asObservable();

    updateCharArray(): void {
        this.amLoggedIn.next(this.users);
    }

    constructor(public http: Http, private auth$: AngularFireAuth, private af: AngularFire) {
        this.authState = auth$.getAuth();
        auth$.subscribe(state => {
            this.authState = state;
            if(this.authenticated) {
                this.users = af.database.list('users/' + this.authState.uid);
                this.amLoggedIn.next({authStatus: this.authenticated, array: this.users});
            }
            else {
                this.amLoggedIn.next({authStatus: this.authenticated, array: null});
            }
        });
        this.charArray = [{name: "Joe"}, {name: "Sal"}, {name: "Murr"}, {name: "Q"}];
    }

    get authenticated(): boolean {
        return this.authState != null;
    }

    googleLogin(): firebase.Promise<FirebaseAuthState> {
        return this.auth$.login({
            provider: AuthProviders.Google,
            method: AuthMethods.Popup
        })
    }

    googleLogout(): void {
        this.auth$.logout();
    }

    displayName(): string {
        if (this.authState != null) {
            return this.authState.google.displayName;
        }
        else {
            return "";
        }
    }

    addNewChar(newChar: any): void {
        if (this.authState) {
            this.users.push(newChar);
            this.updateCharArray()
        }

        // this.charArray.push(newChar);
        // this.updateCharArray();
    }

}
