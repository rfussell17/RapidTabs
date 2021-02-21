import React, { useState } from 'react';
import './App.css';
import { MainPage } from './pages/mainPage/MainPage';
import { Dictionary, QuickLink, StorageKey } from './core/Types';
import { Helpers } from './core/Helpers';
import { StorageManager } from './core/storage';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

/*global chrome*/

const storageManager = new StorageManager();

const App = () => {
  const [quickLinkList, setQuickLinkList] = useState<Dictionary<QuickLink> | null>({});

  const asyncCallback = async (callback: any) => {
    await callback;
  };

  // useEffect(() => {
  //   if (!quickLinkList) {
  //     asyncCallback(
  //       storageManager.get<Dictionary<QuickLink>>(StorageKey.QUICK_LINK_LIST, (result) => {
  //         setQuickLinkList(result || {});
  //       }),
  //     );
  //   }

  //   if (quickLinkList && Object.keys(quickLinkList).length > 0) {
  //     asyncCallback(storageManager.set<Dictionary<QuickLink>>(StorageKey.QUICK_LINK_LIST, quickLinkList));
  //   }
  // }, [quickLinkList]);

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
      // asyncCallback(asyncCallback(storageManager.remove(StorageKey.QUICK_LINK_LIST)));
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
      <ThemeProvider theme={theme}>
        <MainPage
          quickLinkList={quickLinkList || {}}
          addQuickLink={addItem}
          removeQuickLink={removeItem}
          editQuickLink={editItem}
        />
      </ThemeProvider>
    </div>
  );
};

export default App;
