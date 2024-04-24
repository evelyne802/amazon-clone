import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Currency, Language, UserLocPreferenceAPI } from '../types';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

@Injectable({
  providedIn: 'root',
})

export class MainService {

  // api_key = 'd0a3721616de4734bc63eb843e6eeae1';

  api_key = '';
  url = 'https://api.ipgeolocation.io/ipgeo?apiKey=' + this.api_key;
  country = '';
  currency : Currency = {name: '', code: '', symbol: ''};
  currentLanguage: Language = { name: 'English', code: 'EN', iconPath: '../../../assets/images/languages/english-icon.png' };

  languages : Language[] = [{ name: 'English', code: 'EN', iconPath: '../../../assets/languages/images/english-icon.png' },
                            { name: 'Español', code: 'ES', iconPath: '../../../assets/languages/images/spanish-icon.png' },
                            { name: 'الترجمة', code: 'AR', iconPath: '../../../assets/languages/images/arabic-icon.png' },
                            { name: 'Deutsch', code: 'ADE', iconPath: '../../../assets/languages/images/deutsch-icon.png' },
                            { name: 'עברית', code: 'HE', iconPath: '../../../assets/languages/images/hebrew-icon.png' },
                            { name: 'Português', code: 'PT', iconPath: '../../../assets/languages/images/portuguese-icon.jpg' },
                            { name: '한국어', code: 'KO', iconPath: '../../../assets/languages/images/korean-icon.jpg' },
                            { name: '中文 ', code: 'ZH', iconPath: '../../../assets/languages/images/chinese-icon.jpg' },];

  constructor( private http: HttpClient) {
    this.getApiKey();
  }


  getApiKey() {
    const firebaseConfig = {
      apiKey: "AIzaSyDhwxnX29e2ceGu-_gDzPU3sNy91Db35lQ",
      authDomain: "fir-94da5.firebaseapp.com",
      databaseURL: "https://fir-94da5-default-rtdb.firebaseio.com",
      projectId: "fir-94da5",
      storageBucket: "fir-94da5.appspot.com",
      messagingSenderId: "558154350070",
      appId: "1:558154350070:web:148fe42b5ea4b6ffb11bd7",
      measurementId: "G-G71634GM23"
    };
    
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const apiRef = ref(database, 'geoApiKey');

    onValue(apiRef, (snapshot) => {
      const data = snapshot.val();
      this.updateApiKey(data);
    });
  }

  
  updateApiKey(data: string){
    this.api_key = data;
    console.log(this.api_key);
  }


  getGeoData(){
    console.log(this.api_key);
    return this.http.get<UserLocPreferenceAPI>(this.url);
  }


  setLanguage(language: Language) {
    this.currentLanguage = language;
  }


  getLanguage() {
    return this.currentLanguage;
  }
}