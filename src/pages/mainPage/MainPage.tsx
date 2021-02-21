import React, { useState } from 'react';
import { Container, IconButton, Typography } from '@material-ui/core';
import { makeMainPageStyles } from './Styles';
import icon from '../../assets/Icon.png';
import { Menu } from '@material-ui/icons';
import { NumericSpacer } from '../../core/components/Spacers';
import { Dictionary, QuickLink } from '../../core/Types';
import { QuickLinkManager } from '../../core/components/quickLinkManager/QuickLinkManager';

interface Props {
  quickLinkList: Dictionary<QuickLink>;
  addQuickLink: (name: string, urlList: string[]) => void;
  removeQuickLink: (item: QuickLink) => void;
  editQuickLink: (item: QuickLink) => void;
}

export const MainPage = (props: Props) => {
  const [quickLinkToEdit, setQuickLinkToEdit] = useState<QuickLink | null>({
    key: 'asd',
    name: 'entertainment',
    urlList: ['www.youtube.com', 'www.facebook.com', 'wwww.netflix.com', 'www.pornhub.com'],
  });
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
      <QuickLinkManager
        closeModal={() => null}
        removeQuickLink={props.removeQuickLink}
        editQuickLink={props.editQuickLink}
        addQuickLink={props.addQuickLink}
        incomingQuickLink={quickLinkToEdit}
      />
    </Container>
  );
};
