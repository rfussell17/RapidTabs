import React from 'react';
import { makeAddQuickLinkCardStyles } from './Styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

interface Props {
  openManager: () => void;
}

export const AddQuickLinkCard = (props: Props) => {
  const styles = makeAddQuickLinkCardStyles();

  return (
    <Grid item>
      <Card elevation={24} onClick={props.openManager} className={styles.card}>
        <CardContent>
          <Typography variant="h2" component="h2">
            +
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
