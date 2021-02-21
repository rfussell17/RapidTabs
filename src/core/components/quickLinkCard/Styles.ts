import { makeStyles } from '@material-ui/core';

export const makeQuickLinkCardStyles = makeStyles(() => ({
  card: {
    backgroundColor: '#fff',
    borderStyle: 'border-box',
    width: 250,
    height: 150,
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

  header: {
    display: 'flex',
    // justifyItems: 'right',
    alignSelf: 'flex-start',
    padding: '0',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    display: 'flex',
    alignSelf: 'flex-start',
    color: 'indigo',
    fontWeight: 'bold',
  },

  iconButton: {
    padding: '0.75em 0.75em 0 0',
  },
}));
