import React from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import { makeMainPageStyles } from './Styles';
import icon from '../../assets/Icon.png';
import { Menu } from '@material-ui/icons';
import { NumericSpacer } from '../../core/components/Spacers';

export const MainPage = () => {
  const styles = makeMainPageStyles();

  return (
    <Container className={styles.mainContainer}>
      <Container className={styles.header}>
        <div className={styles.headerLeft}>
          <img src={icon} className={styles.rapidTabsIcon} alt="Rapid Tabs" />
          <NumericSpacer size={10} />
          <Typography variant="h4">Rapid Tabs</Typography>
        </div>
        <IconButton color={'inherit'} className={styles.iconButton}>
          <Menu className={styles.icon} />
        </IconButton>
      </Container>

      <Container>{/* TODO: Put List here */}</Container>
    </Container>
  );
};
