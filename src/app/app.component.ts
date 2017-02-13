import {Component, ViewChild, OnInit} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {Subscription} from "rxjs";

import {CharacterDetailPage} from "../pages/character-detail/character-detail";
import {CharacterService} from "../providers/character-service";
import {AddCharacterPage} from "../pages/add-character/add-character";
import {HomePage} from "../pages/home/home";

@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnInit {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;
    pages: Array<{title: string, component: any}>;
    charArray: Array<any>;
    charArraySubscription: Subscription;

    constructor(public platform: Platform, public charService: CharacterService) {
        this.initializeApp();
        this.charArraySubscription = this.charService.charArraySubject$.subscribe(
            updateArray => {
                this.charArray = updateArray;
                this.pages = [];
                for (let i: number = 0; i < this.charArray.length; i++) {
                    this.pages.push({title: this.charArray[i].name, component: CharacterDetailPage})
                }
                this.pages.push({title: "Add Character", component: AddCharacterPage});
            }
        );
    }

    ngOnInit(): void {
        this.charArray = this.charService.charArray;
        this.pages = [];
        for (let i: number = 0; i < this.charArray.length; i++) {
            this.pages.push({title: this.charArray[i].name, component: CharacterDetailPage})
        }
        this.pages.push({title: "Add Character", component: AddCharacterPage});
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
        this.nav.setRoot(page.component, page);
    }
}
