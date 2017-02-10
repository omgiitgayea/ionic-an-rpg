import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CharacterService} from "../../providers/character-service";

@Component({
  selector: 'page-character-detail',
  templateUrl: 'character-detail.html'
})
export class CharacterDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public charService: CharacterService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CharacterDetailPage');
  }

}
