import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import "./About.css";
import ProfilePic from './ProfieImage';



const useStyles = makeStyles({
    card: {
      minWidth: 250,
      maxWidth: 500,
      marginTop: 25
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    text: {
        marginTop: 15,
        textAlign: 'center'
    }
  });

function About(){
    const classes = useStyles();

    return(
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
            <Card className={classes.card}>

                <CardContent>
                    <ProfilePic />
                    <Typography gutterBottom variant="h4" component="h6">
                    About me
                    </Typography>
                
                        <Typography className={classes.text} variant="body1">Hello, my name is Tyler Stendara— a Full Stack Software Engineer 
                        who has a growing passion for both front end and node. As a Software Engineer, I take great pride in bringing my own 
                        creations to life on the browser. However, with an open mind, I always make it a goal to tackle each new project with 
                        not only diligence and drive but also leaving space for improvement because I believe there is always something new to 
                        be learned. As a software engineer, I have acquired skill sets that include building applications with React, React Native, 
                        node, MySQL and other database technologies including MongoDb and Postgres. During my spare time away from coding, I rock climb, play online games, 
                        and/or I am out with my family and friends at the lake. </Typography>

                        
                    </CardContent>
                </Card>
            </Grid>
       

    )

}

export default About;