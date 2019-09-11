import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 150,
    height: 150,
  },
});

export default function ProfilePic() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="https://cityscoutssss.s3.us-east-2.amazonaws.com/applications/Me.png" className={classes.bigAvatar} />
    </Grid>
  );
}
