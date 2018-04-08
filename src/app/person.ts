export class Person {
  private _id: string;
  private _index: number;
  private _guid: string;
  private _isActive: boolean;
  private _balance: string;
  private _picture: string;
  private _age: number;
  private _eyeColor: string;
  private _name: {
    first: string;
    last: string;
  };
  private _company: string;
  private _email: string;
  private _phone: string;
  private _address: string;
  private _about: string;
  private _registered: string;
  private _latitude: string;
  private _longitude: string;
  private _tags: string[];
  private _range: number[];
  private _friends: {
            id: string;
            name: string;
  }[];

  private _greeting: string;
  private _favoriteFruit: string;


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get index(): number {
    return this._index;
  }

  set index(value: number) {
    this._index = value;
  }

  get guid(): string {
    return this._guid;
  }

  set guid(value: string) {
    this._guid = value;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  get balance(): string {
    return this._balance;
  }

  set balance(value: string) {
    this._balance = value;
  }

  get picture(): string {
    return this._picture;
  }

  set picture(value: string) {
    this._picture = value;
  }

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    this._age = value;
  }

  get eyeColor(): string {
    return this._eyeColor;
  }

  set eyeColor(value: string) {
    this._eyeColor = value;
  }

  get name(): { first: string; last: string } {
    return this._name;
  }

  set name(value: { first: string; last: string }) {
    this._name = value;
  }

  get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get about(): string {
    return this._about;
  }

  set about(value: string) {
    this._about = value;
  }

  get registered(): string {
    return this._registered;
  }

  set registered(value: string) {
    this._registered = value;
  }

  get latitude(): string {
    return this._latitude;
  }

  set latitude(value: string) {
    this._latitude = value;
  }

  get longitude(): string {
    return this._longitude;
  }

  set longitude(value: string) {
    this._longitude = value;
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(value: string[]) {
    this._tags = value;
  }

  get range(): number[] {
    return this._range;
  }

  set range(value: number[]) {
    this._range = value;
  }

  get friends(): { id: string; name: string }[] {
    return this._friends;
  }

  set friends(value: { id: string; name: string }[]) {
    this._friends = value;
  }

  get greeting(): string {
    return this._greeting;
  }

  set greeting(value: string) {
    this._greeting = value;
  }

  get favoriteFruit(): string {
    return this._favoriteFruit;
  }

  set favoriteFruit(value: string) {
    this._favoriteFruit = value;
  }
}
