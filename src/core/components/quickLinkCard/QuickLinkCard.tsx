import React from 'react';
import { makeQuickLinkCardStyles } from './Styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import { QuickLink } from '../../Types';

export const QuickLinkCard = (props: QuickLink) => {
  const styles = makeQuickLinkCardStyles();

  const handleClick = () => {
    //TODO open bookmark tabs with chrome extension
    alert('opening bookmark tabs');
  };

  return (
    <Grid item color="indigo">
      <Card onClick={handleClick} className={styles.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={styles.title} color="textPrimary" gutterBottom>
            {props ? <p>{props.name}</p> : <div></div>}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
