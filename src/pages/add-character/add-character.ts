import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {CharacterService} from "../../providers/character-service";

@Component({
    selector: 'page-add-character',
    templateUrl: 'add-character.html'
})
export class AddCharacterPage implements OnInit{
    name: string;
    gender: string;
    myClass: any;
    classes: any[] = [
        {name: "Tank", description: "a character that eats damage for lunch"},
        {name: "Healer", description: "a character that makes you feel better when you've been shot many, many times"},
        {name: "Ranged DPS", description: "a character that kills from a distance"},
        {name: "Melee DPS", description: "a character that makes killing an up close and personal thing"},
        {name: "Leroy Jenkins", description: "a character that is pretty much useless..."}
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams, public charService: CharacterService, public alertCtrl: AlertController) {
    }

    ngOnInit(): void {
        this.myClass = null;
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
                        this.charService.addNewChar({name: this.name});
                        this.name = "";
                        this.gender = "";
                        this.myClass = null;
                    }
                },
                {
                    text: "No",
                    handler: () => {
                        console.log("Still needs work");
                    }
                }
            ]
        });

        confirm.present()
    }
}
