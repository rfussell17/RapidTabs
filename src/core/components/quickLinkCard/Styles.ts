import { makeStyles } from '@material-ui/core';

export const makeQuickLinkCardStyles = makeStyles(() => ({
  card: {
    backgroundColor: '#fff',
    width: 300,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2em .5em',
  },

  title: {
    color: 'indigo',
    fontWeight: 'bold',
  },
}));
