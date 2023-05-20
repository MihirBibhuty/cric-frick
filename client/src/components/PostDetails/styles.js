import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '50%',
    height: '250px',
    width: '250px',
    objectFit: 'cover',
    // border: '2px solid #000',

    '@media (max-width: 600px)': {
      height: '150px',
      width: '150px',
    }
  },
  versus: {
    height: '400px',
    width: '200px',

    '@media (max-width: 600px)': {
      height: '100px',
      width: '100px',
    }
  },
  teamName: {
    fontSize: '4rem',
    fontWeight: 'bold',
    textAlign: 'center',

    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
    }
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '50px',
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
      flexDirection: 'column',
    },
  },
  // recommendedPosts: {
  //   display: 'flex',
  //   [theme.breakpoints.down('sm')]: {
  //     flexDirection: 'column',
  //   },
  // },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  commentsInnerContainer: {
    height: '200px',
    overflowY: 'auto',
    marginRight: '30px',
  },

  btn: {
    padding: '30px',
    backgroundColor: '#fff',
    border: '2px solid rgba(0,0,0,0.6)',
    borderRadius: '5px',
    transition: 'all 0.4s ease-in-out',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '15px',
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderRadius: '0 0 2px 2px',
      transition: 'all 0.2s ease-in-out',
    },

    '&:hover': {
      backgroundColor: '#fff',
      '&:after': {
        height: '100%',
      }
    },

    [theme.breakpoints.down('sm')]: {
      padding: '40px 30px',
    },
  },

  btnClicked: {
    padding: '30px',
    backgroundColor: '#fff',
    border: '2px solid rgba(0,0,0,0.6)',
    borderRadius: '5px',
    transition: 'all 0.4s ease-in-out',

    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.4)',
      borderRadius: '0 0 2px 2px',
      transition: 'all 0.2s ease-in-out',
    },

    [theme.breakpoints.down('sm')]: {
      padding: '40px 30px',
    },
  },
}));
