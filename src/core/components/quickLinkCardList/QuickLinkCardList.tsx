import React from 'react';

import { QuickLinkCard } from '../quickLinkCard/QuickLinkCard';
import { Grid } from '@material-ui/core';

export const QuickLinkCardList = () => {
  const bookmarkFolders = [
    { key: '1', name: 'Work', urlList: ['a', 'b'] },
    { key: '2', name: 'Social', urlList: ['a', 'b'] },
    { key: '3', name: 'Jobs', urlList: ['a', 'b'] },
    { key: '4', name: 'Financial', urlList: ['a', 'b'] },
    { key: '5', name: 'Financial', urlList: ['a', 'b'] },
    { key: '6', name: 'Financial', urlList: ['a', 'b'] },
    { key: '7', name: 'Financial', urlList: ['a', 'b'] },
    { key: '8', name: 'Financial', urlList: ['a', 'b'] },
    { key: '9', name: 'Financial', urlList: ['a', 'b'] },
    { key: '10', name: 'Financial', urlList: ['a', 'b'] },
    { key: '11', name: 'Financial', urlList: ['a', 'b'] },
    { key: '12', name: 'Financial', urlList: ['a', 'b'] },
  ];

  const folders = bookmarkFolders.map((folder) => (
    <QuickLinkCard key={folder.key} name={folder.name} urlList={folder.urlList} />
  ));

  return (
    <Grid container justify="space-between">
      {folders}
    </Grid>
  );
};
