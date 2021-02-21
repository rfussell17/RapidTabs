import React from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import { makeMainPageStyles } from './Styles';
import icon from '../../assets/Icon.png';
import { Menu } from '@material-ui/icons';
import { NumericSpacer } from '../../core/components/Spacers';
import { QuickLinkCardList } from '../../core/components/quickLinkCardList/QuickLinkCardList';
import { Dictionary, QuickLink } from '../../core/Types';

interface Props {
  quickLinkList: Dictionary<QuickLink>;
  addQuickLink: (name: string, urlList: string[]) => void;
  removeQuickLink: (item: QuickLink) => void;
  editQuickLink: (item: QuickLink) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MainPage = (props: Props) => {
  const styles = makeMainPageStyles();

  return (
    <Container className={styles.mainContainer}>
      <Container className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={icon} className={styles.rapidTabsIcon} alt="Rapid Tabs" />
          <NumericSpacer size={10} />
          <Typography variant="h4">Rapid Tabs</Typography>
        </div>
        <IconButton color={'inherit'} className={styles.iconButton}>
          <Menu className={styles.icon} />
        </IconButton>
      </Container>

      <Container>
        <QuickLinkCardList />
      </Container>
    </Container>
  );
};

/*
  const addItem = (item: ListItem) => {
    const key: string = Helpers.generateKey();
    const listCopy: Dictionary<ListItem> = { ...itemList };
    const newItem: ListItem = {
      ...item,
      key: key,
    };

    listCopy[key] = newItem;
    setItemList(listCopy);
  }

  const removeItem = (item: ListItem): void => {
    const listCopy: Dictionary<ListItem> = { ...itemList };
    delete listCopy[item.key];
    if (Object.keys(listCopy).length === 0) {
      cookieManager.remove(CookieKeys.TASK_LIST);
    }
    setItemList(listCopy);
  }

  const editItem = (item: ListItem): void => {
    const listCopy: Dictionary<ListItem> = { ...itemList };
    listCopy[item.key] = { ...item };
    setItemList(listCopy);
  }

 */
