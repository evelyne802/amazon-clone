import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Currency, Language, UserLocPreference, UserLocPreferenceAPI } from '../types';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MainService {

  api_key = 'd0a3721616de4734bc63eb843e6eeae1';
  url = 'https://api.ipgeolocation.io/ipgeo?apiKey=' + this.api_key;
  country = '';
  currency : Currency = {name: '', code: '', symbol: ''};
  currentLanguage: Language = { name: 'English', code: 'EN', iconPath: '../../../assets/images/english-icon.png' };

  languages : Language[] = [{ name: 'English', code: 'EN', iconPath: '../../../assets/images/english-icon.png' },
                            { name: 'Español', code: 'ES', iconPath: '../../../assets/images/spanish-icon.png' },
                            { name: 'الترجمة', code: 'AR', iconPath: '../../../assets/images/arabic-icon.png' },
                            { name: 'Deutsch', code: 'ADE', iconPath: '../../../assets/images/deutsch-icon.png' },
                            { name: 'עברית', code: 'HE', iconPath: '../../../assets/images/hebrew-icon.png' },
                            { name: 'Português', code: 'PT', iconPath: '../../../assets/images/portuguese-icon.jpg' },
                            { name: '한국어', code: 'KO', iconPath: '../../../assets/images/korean-icon.jpg' },
                            { name: '中文 ', code: 'ZH', iconPath: '../../../assets/images/chinese-icon.jpg' },]

  constructor(private http: HttpClient) {}

  getData(){
    return this.http.get<UserLocPreferenceAPI>(this.url);
  }


  setLanguage(language: Language) {
    this.currentLanguage = language;
  }


  getLanguage() {
    return this.currentLanguage;
  }
}
