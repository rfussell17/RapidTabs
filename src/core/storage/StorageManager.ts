import { Dictionary } from '../Types';

export class StorageManager {
  public async get<T>(key: string, callback: (result: T) => void) {
    await chrome.storage.sync.get([key], (result) => {
      callback(result[key] as T);
    });
  }

  public async set<T>(key: string, value: T) {
    const obj: Dictionary<T> = {};
    obj[key] = value;
    await chrome.storage.sync.set(obj);
  }

  public async remove(key: string) {
    await chrome.storage.sync.remove(key);
  }
}
