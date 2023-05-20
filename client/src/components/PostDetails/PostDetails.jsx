import React, { useState, useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, Button } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';

import { getPost, getPostsBySearch, voteTeam1, voteTeam2 } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';

import versus2 from '../../images/versus2.png';


const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const [vote1, setVote1] = useState(post?.team1Votes || []);
  const [vote2, setVote2] = useState(post?.team2Votes || []);

  useEffect(() => {
    setVote1(post?.team1Votes);
    setVote2(post?.team2Votes);
  }, [post]);

  const user = JSON.parse(localStorage.getItem('profile'));
  const userId = user?.result.googleId || user?.result?._id;
  const hasVotedTeam1 = post?.team1Votes.find((vote) => vote === userId);
  const hasVotedTeam2 = post?.team2Votes.find((vote) => vote === userId);


  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const handleVoteTeam1 = async () => {
    dispatch(voteTeam1(post._id));
    setVote1([...post.team1Votes, userId]);
  };

  const handleVoteTeam2 = async () => {
    dispatch(voteTeam2(post._id));
    setVote2([...post.team2Votes, userId]);
  };

  const condition = (user?.result) && (!vote1.find((vote) => vote === userId)) && (!vote2.find((vote) => vote === userId));


  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => (
            <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` #${tag} `}
            </Link>
          ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
          <Typography variant="h6">
            Created by:
            <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${post.name}`}
            </Link>
          </Typography>
          <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <CommentSection post={post} />
          <Divider style={{ margin: '20px 0' }} />
        </div>

        <div className={classes.imageSection}>
          <Button disabled={condition ? false : true} variant="contained" className={condition ? classes.btn : classes.btnClicked} onClick={handleVoteTeam1}>
            <div>
              <img className={classes.media} src={post.team1Img || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.team1Name} />
              <Typography variant="h4" color="textSecondary" component="h2" className={classes.teamName}>{post.team1Name || 'Team 1'}</Typography>
            </div>
          </Button>

          <img className={classes.versus} src={versus2} alt="icon" height="40px" />

          <Button disabled={condition ? false : true} variant="contained" className={condition ? classes.btn : classes.btnClicked} onClick={handleVoteTeam2}>
            <div>
              <img className={classes.media} src={post.team2Img || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.team2Name} />
              <Typography variant="h4" color="textSecondary" component="h2" className={classes.teamName}>{post.team2Name || 'Team 2'}</Typography>
            </div>
          </Button>
        </div>

      </div>
    </Paper>
  );
};

export default Post;
