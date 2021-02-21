import { makeStyles } from '@material-ui/core';

export const makeMainPageStyles = makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    padding: 0,
  },
  header: {
    maxHeight: 100,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
    flex: 1,
    color: '#35879A',
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rapidTabsIcon: {
    width: 50,
  },
  iconButton: {
    width: 32,
    height: 32,
    padding: 10,
  },
  icon: {
    width: 32,
    height: 32,
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
