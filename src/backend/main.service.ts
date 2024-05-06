import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency, Language, UserLocPreferenceAPI } from '../types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class MainService {

  apiKey = 'd0a3721616de4734bc63eb843e6eeae1';
  apiUrl = 'http://localhost:3000/api/data';
  url = 'https://api.ipgeolocation.io/ipgeo?apiKey=' + this.apiKey;;
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

  categories = ["All Departments", 
                            "Arts & Crafts", 
                            "Automotive", 
                            "Baby", 
                            "Beauty & Persoal Care",
                            "Books",
                            "Boy's Fashion",
                            "Computers",
                            "Deals",
                            "Digital Music",
                            "Electronics",
                            "Girl's Fashion",
                            "Health & Household",
                            "Home & Kitchen",
                            "Industrial & Scientific",
                            "Kindle Store",
                            "Luggage",
                            "Men's Fashion",
                            "Movies & TV",
                            "Music, Cds & Vinyl",
                            "Pet Supplies",
                            "Prime Video",
                            "Sofrware",
                            "Sports & Outdoors",
                            "Tools & Home Improvement",
                            "Toys & Games",
                            "Video Games",
                            "Women's Fashion"];
  productCount : number = 0;

  constructor( private http: HttpClient ) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // async getApiKey() {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDhwxnX29e2ceGu-_gDzPU3sNy91Db35lQ",
  //     authDomain: "fir-94da5.firebaseapp.com",
  //     databaseURL: "https://fir-94da5-default-rtdb.firebaseio.com",
  //     projectId: "fir-94da5",
  //     storageBucket: "fir-94da5.appspot.com",
  //     messagingSenderId: "558154350070",
  //     appId: "1:558154350070:web:148fe42b5ea4b6ffb11bd7",
  //     measurementId: "G-G71634GM23"
  //   };
    
  //   const app = initializeApp(firebaseConfig);
  //   const database = getDatabase(app);
  //   const dbRef = ref(database, 'geoApiKey');
  //   const snapshot = (await get(dbRef));
  //   const api = snapshot.val();
  //   return api;
  // }

  
  getGeoData(){
    return this.http.get<UserLocPreferenceAPI>(this.url);
  }


  setLanguage(language: Language) {
    this.currentLanguage = language;
  }


  getLanguage() {
    return this.currentLanguage;
  }


  getCategories(){
    return this.categories;
  }


  getProductCount(){
    return this.productCount;
  }

}

