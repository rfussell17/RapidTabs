import { makeStyles } from '@material-ui/core';

export const makeQuickLinkCardListStyles = makeStyles(() => ({
  cardList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
}));
