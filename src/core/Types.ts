export type Dictionary<T> = { [key: string]: T };

export interface QuickLink {
  key: string;
  name: string;
  urlList: string[];
}

export enum StorageKey {
  QUICK_LINK_LIST = 'quickLinkList',
}
