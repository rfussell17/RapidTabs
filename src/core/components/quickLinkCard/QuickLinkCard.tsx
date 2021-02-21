import React, { useState } from 'react';
import { makeQuickLinkCardStyles } from './Styles';
import { Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@material-ui/core';
import { QuickLink } from '../../Types';
import Create from '@material-ui/icons/Create';

interface Props {
  quickLink: QuickLink;
  openManager: (quickLink: QuickLink) => void;
}

export const QuickLinkCard = (props: Props) => {
  const [editCardFlag, setEditCardFlag] = useState(false);
  const styles = makeQuickLinkCardStyles();

  const handleCardOpen = () => {
    if (editCardFlag === true) {
      setEditCardFlag(false);
      return;
    }
    //TODO open bookmark tabs with chrome extension
    alert('opening bookmark tabs');
  };

  const handleCardEdit = () => {
    //TODO open edit options, add remove tab Urls
    setEditCardFlag(true);
    props.openManager(props.quickLink);
  };

  return (
    <Grid item color="indigo">
      <Card onClick={handleCardOpen} className={styles.card}>
        <CardHeader
          className={styles.header}
          action={
            <IconButton className={styles.iconButton} aria-label="settings">
              <Create onClick={handleCardEdit} />
            </IconButton>
          }
        />
        <CardContent className={styles.content}>
          <Typography variant="h4" component="h2" className={styles.title}>
            {props.quickLink.name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
