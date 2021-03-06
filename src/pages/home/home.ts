import {Component} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {CharacterService} from "../../providers/character-service";
import {Subscription} from "rxjs";
import {FirebaseListObservable} from "angularfire2";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    loggedIn: boolean;
    loggedInSubscription: Subscription;
    testArray: FirebaseListObservable<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private charService: CharacterService) {
    }

    ionViewDidLoad() {
        this.loggedInSubscription = this.charService.amLoggedIn$.subscribe(
            updateStatus => {
                this.loggedIn = updateStatus.authStatus;
                this.testArray = updateStatus.array;
            }
        )
    }

    loginToGoogle(): void {
        this.charService.googleLogin()
            .then(() => this.signInSuccess());
    }

    logoutOfGoogle(): void {
        this.charService.googleLogout();
    }

    private signInSuccess(): void {
        this.loggedIn = this.charService.authenticated;
        let toast = this.toastCtrl.create({
            message: "Welcome " + this.charService.displayName(),
            duration: 3000
        });
        toast.present();
    }
}
