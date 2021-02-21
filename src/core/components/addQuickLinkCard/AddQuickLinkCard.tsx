import React from 'react';
import { makeAddQuickLinkCardStyles } from './Styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

export const AddQuickLinkCard = () => {
  const styles = makeAddQuickLinkCardStyles();

  const handleAddCard = () => {
    //TODO go to create card page
    alert('Adding a card');
  };
  return (
    <Grid item>
      <Card onClick={handleAddCard} className={styles.card}>
        <CardContent>
          <Typography variant="h2" component="h2">
            +
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
