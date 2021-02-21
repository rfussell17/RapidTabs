import React from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import { makeMainPageStyles } from './Styles';
import icon from '../../assets/Icon.png';
import { Menu } from '@material-ui/icons';
import { NumericSpacer } from '../../core/components/Spacers';
import { QuickLinkCardList } from '../../core/components/quickLinkCardList/QuickLinkCardList';
import { Dictionary, QuickLink } from '../../core/Types';

interface Props {
  quickLinkList: Dictionary<QuickLink>;
  addQuickLink: (name: string, urlList: string[]) => void;
  removeQuickLink: (item: QuickLink) => void;
  editQuickLink: (item: QuickLink) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MainPage = (props: Props) => {
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

      <Container className={styles.body}>
        <QuickLinkCardList />
      </Container>
    </Container>
  );
};
