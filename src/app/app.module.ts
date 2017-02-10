import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AddCharacterPage} from "../pages/add-character/add-character";
import {CharacterDetailPage} from "../pages/character-detail/character-detail";
import {CharacterService} from "../providers/character-service";

@NgModule({
    declarations: [
        MyApp,
        AddCharacterPage,
        CharacterDetailPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AddCharacterPage,
        CharacterDetailPage
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        CharacterService
    ]
})
export class AppModule {
}
