import {Component} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {CharacterService} from "../../providers/character-service";

@Component({
    selector: 'page-add-character',
    templateUrl: 'add-character.html'
})
export class AddCharacterPage {
    name: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public charService: CharacterService, public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddCharacterPage');
    }

    showConfirm() {
        let confirm = this.alertCtrl.create({
            title: "Create Character " + this.name,
            message: "Probably will have more detailed info about character",
            buttons: [
                {
                    text: "Yes",
                    handler: () => {
                        console.log("Created!")
                        this.name = "";
                    }
                },
                {
                    text: "No",
                    handler: () => {
                        console.log("Still needs work")
                    }
                }
            ]
        });

        confirm.present()
    }
}
