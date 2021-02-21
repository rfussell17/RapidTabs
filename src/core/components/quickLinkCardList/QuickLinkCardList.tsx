import { Card } from '@material-ui/core';
import React from 'react';
import { makeQuickLinkCardListStyles } from './Styles';
import { QuickLinkCard } from '../quickLinkCard/QuickLinkCard';

export const QuickLinkCardList = () => {
  const styles = makeQuickLinkCardListStyles();

  const bookmarkFolders = [
    { key: '1', name: 'Work', urlList: ['a', 'b'] },
    { key: '2', name: 'Social', urlList: ['a', 'b'] },
    { key: '3', name: 'Jobs', urlList: ['a', 'b'] },
    { key: '4', name: 'Financial', urlList: ['a', 'b'] },
  ];
  const folders = bookmarkFolders.map((folder) => (
    <QuickLinkCard key={folder.key} name={folder.name} urlList={folder.urlList} />
  ));

  return <div className={styles.cardList}>{folders}</div>;
};
