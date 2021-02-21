import React from 'react';
import { makeQuickLinkCardStyles } from './Styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import { QuickLink } from '../../Types';

export const QuickLinkCard = (props: QuickLink) => {
  const styles = makeQuickLinkCardStyles();

  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={styles.title} color="textPrimary" gutterBottom>
          {props ? <p>{props.name}</p> : <div></div>}
        </Typography>
      </CardContent>
    </Card>
  );
};
