import { makeStyles } from '@material-ui/core';

export const makeAddQuickLinkCardStyles = makeStyles(() => ({
  card: {
    backgroundColor: '#373737',
    borderStyle: 'border-box',
    width: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'white',
  },
}));
