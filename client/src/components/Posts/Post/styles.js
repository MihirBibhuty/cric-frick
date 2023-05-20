import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '120px',
    width: '120px',
    borderRadius: '50%',
    border: '2px solid #000',

    // for mobile devices
    '@media (max-width: 600px)': {
      height: '70px',
      width: '70px',
    }
  },
  versus: {
    height: '200px',
    width: '200px',

    // for mobile devices
    '@media (max-width: 600px)': {
      height: '80px',
      width: '80px',
    }
  },
  teamName: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',

    // for mobile devices
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
    }
  },
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
    textAlign: 'center',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    display: 'block',
    textAlign: 'initial',
  },
  teams: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '20px 0',
  },
});
