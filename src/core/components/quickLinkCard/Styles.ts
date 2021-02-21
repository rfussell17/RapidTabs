import { makeStyles } from '@material-ui/core';

export const makeQuickLinkCardStyles = makeStyles(() => ({
  card: {
    backgroundColor: '#373737',
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
    color: '#37b1cc',
    fontWeight: 'bold',
  },

  iconButton: {
    padding: '0.75em 0.75em 0 0',
    color: 'rgb(140,60,160)',
    '&:active': {
      backgroundColor: 'gray',
    },
  },
  plus: {
    margin: '0 auto',
    padding: '0',
    color: '#FFCA28',
    display: 'flex',
    justifySelf: 'center',
    alignSelf: 'center',
  },
  // card:last
}));
