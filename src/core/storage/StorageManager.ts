export class StorageManager {
  public async get<T>(key: string) {
    console.log('GET');
    await chrome.storage.sync.get([key], (result) => {
      console.log(result);
      return result;
    });
  }

  public async set<T>(key: string, value: T) {
    console.log('set');
    await chrome.storage.sync.set({ key: value });
  }
}
