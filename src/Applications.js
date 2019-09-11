import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import "./About.css";
import "./Applications.css";


const useStyles = makeStyles({
    card: {
      minWidth: 260,
      maxWidth: 250,
      margin: 15,
      maxHeight: 600,
      minHeight: 600
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 25,
      color: "black"
    },
    pos: {
      marginBottom: 12,
    },
    media: {
        height: 200,
        width: 260
      },
      button: {
        background: '#90A4AE',
        border: 0,
        color: 'black',
        height: 30,
        padding: '0 80px',
        marginBottom: 5
      }

  });

function Applications(){
    const classes = useStyles();

    return(
        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        >
        <Card className={classes.card}>
        <a href="https://github.com/tstendara/CityScout"><Button className={classes.button} size="small" color="primary">
                Github repo
                </Button></a>
            <a href="https://www.cityscout.io"><CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://cityscoutssss.s3.us-east-2.amazonaws.com/Screen+Shot+2019-08-21+at+12.55.56+PM.png"
                title="cityscout.io"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    CityScout
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                CityScout is a responsive web app that recommends events to users based on their Google calendar availability.
                Events can further be filtered by day selection, inputted times, and category preferences; users can then add an event to their calendar.
                CityScout utilizes a SQL database that aggregates events from multiple event management sources.
                </Typography>
                </CardContent>
            </CardActionArea></a>
           
            
        </Card>

        <Card className={classes.card}>
        <a href="https://github.com/tstendara/OverStats"><Button className={classes.button} size="small" color="primary">
                Github repo
                </Button></a>
            <a href="https://protected-shelf-73940.herokuapp.com/"><CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://cityscoutssss.s3.us-east-2.amazonaws.com/applications/Screen+Shot+2019-08-21+at+2.07.45+PM.png"
                title="OverStats"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    OverStats
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                OverStats is a React-Native App developed to keep players informed of everything Overwatch. 
                This is achieved by using several API's in order to get the information needed to inform players 
                effectively with their live statistics. OverStats is not just informative on personal statistics, but 
                OverStats will also keep users informed on OverWatch League status and the Top 10 players on the 
                leaderboard screen. 
                </Typography>
                </CardContent>
            </CardActionArea></a>
            
        </Card>

        <Card className={classes.card}>
        <a href="https://github.com/zbay-fec/Search-Nav"><Button className={classes.button} size="small" color="primary">
                Github repo
                </Button></a>
            <a href="http://ec2-3-130-208-95.us-east-2.compute.amazonaws.com/"><CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://cityscoutssss.s3.us-east-2.amazonaws.com/applications/zbay1.png"
                title="cityscout.io"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    Zbay
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                The search bar is the main component which handles mispelling, and autocorrecting in terms of relevance to the items 
                that are within the MYSQL database used. This is a microservice, meaning that this component is capable of rendering 
                on its own as well as dispatching the product id upon searching an item. The navbar uses ReactJS for the client-side 
                rendering while the backend is built with Node.js(Express) along with a remote Database using MYSQL.
                </Typography>
                </CardContent>
            </CardActionArea></a>
            
        </Card>

        

        <Card className={classes.card}>
        <a href="https://github.com/tstendara/Bitcoin-Tracker"><Button className={classes.button} size="small" color="primary">
                Github repo
                </Button></a>
            <a href="https://github.com/tstendara/Bitcoin-Tracker"><CardActionArea>
                <CardMedia
                className={classes.media}
                image="https://cityscoutssss.s3.us-east-2.amazonaws.com/applications/stockTracker.png"
                title="cityscout.io"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    Bitcoin-Tracker
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Tracks bitcoin value within any set start - end date.
                </Typography>
                </CardContent>
            </CardActionArea></a>
            
        </Card>

        <Card className={classes.card}>
        <a href="https://github.com/tstendara/lowes-carousel"><Button className={classes.button} size="small" color="primary">
                Github repo
                </Button></a>
            <a href="https://github.com/tstendara/lowes-carousel"><CardActionArea>
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                    Lazy-Lowesing
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lazy-Lowesing is a responsive web app that is intended to mimick Lowes. In order to replicate real world work, I worked existing code initially designed 
                to handle 100 items overall to handle 10 million items. This was done by refactoring frontend and backend. I also changed 
                DB technologies to better handle the increase of items from Postgres to MYSQL.
                </Typography>
                </CardContent>
            </CardActionArea></a>
            
        </Card>
            </Grid>
    )

}


export default Applications;