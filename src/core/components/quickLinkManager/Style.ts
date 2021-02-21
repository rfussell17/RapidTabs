import { makeStyles } from '@material-ui/core';

export const makeQuickLinkManagerStyle = makeStyles(() => ({
  container: {
    display: 'flex',
    flex: 1,
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paperContainer: {
    display: 'flex',
    width: 600,
    maxHeight: 550,
    paddingTop: 50,
    paddingBottom: 50,
    flex: 1,
    flexDirection: 'column',
    overflowY: 'auto',
    scrollBehavior: 'smooth',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 50,
  },
  textField: {
    marginTop: 10,
    marginBottom: 10,
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
  headerEdit: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 10,
  },
  headerCreate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingRight: 10,
  },
  buttonRow: {
    paddingTop: 50,
    paddingRight: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}));
