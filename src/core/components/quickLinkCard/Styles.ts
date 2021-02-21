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
      transform: 'scale(1.02)',
      cursor: 'pointer',
      backgroundColor: 'rgb(35,30,40)',
      color: '#37b1dF',
    },
  },

  header: {
    display: 'flex',
    flex: 0,
    alignSelf: 'flex-start',
    padding: '0',
    paddingTop: 10,
    paddingRight: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    display: 'flex',
    alignSelf: 'flex-start',
    color: '#37b1cc',
    fontWeight: 'normal',
  },

  iconButton: {
    color: 'rgb(140,60,160)',
    '&:active': {
      // backgroundColor: 'gray',
    },
  },
}));
