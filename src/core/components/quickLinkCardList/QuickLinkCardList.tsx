import React from 'react';
import { QuickLinkCard } from '../quickLinkCard/QuickLinkCard';
import { Grid } from '@material-ui/core';
import { AddQuickLinkCard } from '../addQuickLinkCard/AddQuickLinkCard';
import { Dictionary, QuickLink } from '../../Types';

interface Props {
  quickLinkList: Dictionary<QuickLink>;
  openManager: (quickLink: QuickLink | null) => void;
}

export const QuickLinkCardList = (props: Props) => {
  const folders = Object.values(props.quickLinkList).map((quickLink: QuickLink) => (
    <QuickLinkCard key={quickLink.key} quickLink={quickLink} openManager={props.openManager} />
  ));

  return (
    <Grid container justify="space-between">
      {folders}
      <AddQuickLinkCard openManager={() => props.openManager(null)} />
    </Grid>
  );
};
