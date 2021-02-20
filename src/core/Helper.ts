import { alphaNumericCharacters } from './Constants';

export class Helper {
  public static generateKey() {
    let key = '';
    for (let i = 0; i < 16; i++) {
      const character: string = alphaNumericCharacters.charAt(
        Math.round(Math.random() * alphaNumericCharacters.length),
      );
      key = key + character;
    }
  }
}
