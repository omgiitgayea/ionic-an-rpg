import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {Subscription} from "rxjs";

import {CharacterDetailPage} from "../pages/character-detail/character-detail";
import {CharacterService} from "../providers/character-service";
import {AddCharacterPage} from "../pages/add-character/add-character";
import {HomePage} from "../pages/home/home";
import {FirebaseListObservable} from "angularfire2";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;
    pages: Array<{title: string, component: any}>;
    charArray: FirebaseListObservable<any>;
    loggedInSubscription: Subscription;
    loggedIn: boolean;

    constructor(public platform: Platform, public charService: CharacterService) {
        this.initializeApp();
        this.loggedInSubscription = this.charService.amLoggedIn$.subscribe(
            updateArray => {
                this.loggedIn = updateArray.authStatus;
                this.charArray = updateArray.array;
            }
        )
    }

    ionViewDidLoad() {

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    openPage(event, page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(CharacterDetailPage, page);
    }

    openAddPage() {
        this.nav.setRoot(AddCharacterPage);
    }
}
