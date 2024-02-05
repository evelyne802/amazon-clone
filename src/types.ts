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
