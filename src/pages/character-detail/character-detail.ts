import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CharacterService} from "../../providers/character-service";

@Component({
  selector: 'page-character-detail',
  templateUrl: 'character-detail.html'
})
export class CharacterDetailPage {
    character: any;
    pageTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public charService: CharacterService) {
      this.character = navParams.data;
      if (this.character.title) {
          this.pageTitle = this.character.title + " Information";
      }
      else {
          this.pageTitle = "Character Details"
      }
  }

  ionViewDidLoad() {
    console.log(this.charService.charArray.length);
  }

}
