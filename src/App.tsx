import React, { useEffect, useState } from 'react';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage';
import { Dictionary, QuickLink, StorageKey } from './core/Types';
import { Helpers } from './core/Helpers';
import { StorageManager } from './core/storage';

/*global chrome*/

const storageManager = new StorageManager();

const App = () => {
  const [quickLinkList, setQuickLinkList] = useState<Dictionary<QuickLink> | null>(null);

  const asyncCallback = async (callback: any) => {
    await callback;
  };

  useEffect(() => {
    if (quickLinkList && Object.keys(quickLinkList).length > 0) {
      asyncCallback(storageManager.set<Dictionary<QuickLink>>(StorageKey.QUICK_LINK_LIST, quickLinkList));
    }

    if (!quickLinkList) {
      asyncCallback(
        storageManager.get<Dictionary<QuickLink>>(StorageKey.QUICK_LINK_LIST, (result: Dictionary<QuickLink>) => {
          setQuickLinkList(result || {});
        }),
      );
    }
  }, [quickLinkList]);

  const addItem = (name: string, urlList: string[]) => {
    const key: string = Helpers.generateKey();
    const listCopy: Dictionary<QuickLink> = { ...quickLinkList };
    const newItem: QuickLink = {
      key: key,
      name,
      urlList,
    };

    listCopy[key] = newItem;
    setQuickLinkList(listCopy);
  };

  const removeItem = (item: QuickLink): void => {
    const listCopy: Dictionary<QuickLink> = { ...quickLinkList };
    delete listCopy[item.key];
    if (Object.keys(listCopy).length === 0) {
      asyncCallback(asyncCallback(storageManager.remove(StorageKey.QUICK_LINK_LIST)));
    }
    setQuickLinkList(listCopy);
  };

  const editItem = (item: QuickLink): void => {
    const listCopy: Dictionary<QuickLink> = { ...quickLinkList };
    listCopy[item.key] = { ...item };
    setQuickLinkList(listCopy);
  };

  return (
    <div className="App">
      <MainPage
        quickLinkList={quickLinkList || {}}
        addQuickLink={addItem}
        removeQuickLink={removeItem}
        editQuickLink={editItem}
      />
    </div>
  );
};

export default App;
