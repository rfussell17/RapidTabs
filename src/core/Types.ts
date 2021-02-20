export type Dictionary<T> = { [key: string]: T };

export interface QuickLink {
  key: string;
  name: string;
  urlList: string[];
}
