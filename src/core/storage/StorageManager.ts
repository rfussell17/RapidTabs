import { Dictionary } from '../Types';

export class StorageManager {
  public async get<T>(key: string, callback: (result: T) => void) {
    console.log('GET');
    await chrome.storage.local.get([key], (result) => callback(result as T));
  }

  public async set<T>(key: string, value: T) {
    const setObj: Dictionary<T> = {};
    setObj[key] = value;
    await chrome.storage.local.set(setObj);
  }

  public async remove(key: string) {
    await chrome.storage.sync.remove(key);
  }
}
