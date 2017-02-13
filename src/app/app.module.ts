import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AngularFireModule} from "angularfire2";

import {AddCharacterPage} from "../pages/add-character/add-character";
import {CharacterDetailPage} from "../pages/character-detail/character-detail";
import {CharacterService} from "../providers/character-service";
import {HomePage} from "../pages/home/home";

export const firebaseConfig = {
    apiKey: "AIzaSyAQnrXUrDxFO6nUO1yNw55UWnB0lZfNhtg",
    authDomain: "ionic-test-rpg.firebaseapp.com",
    databaseURL: "https://ionic-test-rpg.firebaseio.com",
    storageBucket: "ionic-test-rpg.appspot.com",
    messagingSenderId: "763136708641"
};

@NgModule({
    declarations: [
        MyApp,
        AddCharacterPage,
        CharacterDetailPage,
        HomePage
    ],
    imports: [
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AddCharacterPage,
        CharacterDetailPage,
        HomePage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CharacterService
    ]
})
export class AppModule {
}
