import { makeStyles } from '@material-ui/core';

export const makeQuickLinkCardStyles = makeStyles(() => ({
  card: {
    backgroundColor: '#fff',
    width: 250,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1em .5em',
    '&:hover, &:focus': {
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.04)',
      cursor: 'pointer',
    },
    '&:active': {
      backgroundColor: 'gray',
    },
  },

  title: {
    color: 'indigo',
    fontWeight: 'bold',
  },
}));
