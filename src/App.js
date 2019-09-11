import React from 'react';
import './App.css';
import Applications from './Applications';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Particles from 'react-particles-js';
import About from './About';

const useStyles = makeStyles({
  subHeading: {
    fontSize: 45,
    color: '#90A4AE',
    marginTop: 60
  },
  particles: {
    height: '-10000vw',
    width: '-200vw'
  }
});

function Main() {
  const classes = useStyles();
                                                      
  return (
    <div className="App">
      <div className="Header-container">
      <h1 className="Name">Tyler Stendara</h1> 
     
      <table align='center'>
        <tbody>
            <tr>
              <td><a href="https://www.github.com/tstendara"><Button className="github">Github</Button></a></td>
              <td><a href="https://tylersresume.s3.us-east-2.amazonaws.com/Tyler+Stendara.pdf"><Button className="resume">Resume</Button></a></td>
              <td><a href="https://www.linkedin.com/in/tyler-s-ba07a2120/"><Button className="linkedin">Linkedin</Button></a></td>
            </tr>
        </tbody>
      </table>
      
      <hr></hr>
      </div>

      <div className={classes.particles}>
        <Particles 
        height='100px'
        />
      </div>
        <About />
       
        <Typography gutterBottom variant="h4" component="h6" className={classes.subHeading}>
          Applications
        </Typography>
      <Applications />
    </div>
  );
}

export default Main;
