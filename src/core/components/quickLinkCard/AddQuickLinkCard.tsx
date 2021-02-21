import React from 'react';
import { makeQuickLinkCardStyles } from './Styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

export const AddQuickLinkCard = () => {
  const styles = makeQuickLinkCardStyles();

  const handleAddCard = () => {
    //TODO go to create card page
    alert('Adding a card');
  };
  return (
    <Grid item>
      <Card onClick={handleAddCard} className={styles.card}>
        <CardContent className={styles.plus}>
          <Typography variant="h3" component="h2" color="textPrimary">
            +
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
