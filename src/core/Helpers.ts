import { alphaNumericCharacters } from './Constants';

export class Helpers {
  public static generateKey(): string {
    let key = '';

    for (let i = 0; i < 16; i++) {
      const character: string = alphaNumericCharacters.charAt(
        Math.round(Math.random() * alphaNumericCharacters.length),
      );
      key = key + character;
    }

    return key;
  }
}
