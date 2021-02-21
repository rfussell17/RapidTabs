import React from 'react';
import { makeAddQuickLinkCardStyles } from './Styles';
import { Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';

interface Props {
  openManager: () => void;
}

export const AddQuickLinkCard = (props: Props) => {
  const styles = makeAddQuickLinkCardStyles();

  return (
    <Grid item>
      <Card elevation={24} onClick={props.openManager} className={styles.card}>
        <CardHeader>&nbsp;</CardHeader>
        <CardContent>
          <Typography variant="h3" component="h3">
            +
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
