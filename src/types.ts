export type Currency = {
    name: string;
    code: string;
    symbol: string;
}

export type Language = {
    name: string;
    code: string;
    iconPath: string;
}

export type Country = {
    name: string;
    flag: string;
}

export type UserLocPreference = {
    country: Country;
    currency: Currency;
    language: Language;
}

export type UserLocPreferenceAPI = {
    country_name: string;
    country_flag: string;
    currency: Currency;
    language: Language;
}

export type Product = {
    productPicture: string;
    percentageOff: number;
    price: number;
    listPrice: number;
    description: string;
}

export type RecommendedByHistoryProduct = {
    productPicture: string;
    description: string;
    price: number;
    rating: number;
    ratingImg: string;
    ratingsNum: any;
    amazonsChoice: Boolean;
    category: string;
    numShippingDays: number;
    shippingCost: number;
    deliveryDate: string;
}

export interface DialogData {
    popUpType: 'location' | 'signIn' ;
    userDetails: UserLocPreference;
}

export type Deal = {
    description: string;
    products: Product[];
}

export type CategoryRecc = {
    name: string;
    picture: string;
}

export type CategoryReccSection = {
    description: string;
    categories: CategoryRecc[];
}