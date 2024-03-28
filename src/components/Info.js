import React from 'react';
import { Grid, Paper } from '@mui/material';
import '../css/info.css';
import '../css/image.css';

export default function Info({ scrollToProjects,scrollToContact }) {
  return (
    <div className="container">
      <div className="TextBox">
        <div className='about'>
          I'm Carlos Akel, a full-stack web developer passionate about innovation. I thrive on exploring emerging technologies to enhance web development.
        </div>
        <div className='about'>
          With a versatile background in software engineering, I adapt seamlessly to diverse projects.
        </div>
        <div className='about'>
          My goal is to craft interactive experiences that inspire and delight users, pushing the boundaries of what's possible.
        </div>
      </div>

      <div className='pixelart-to-css position'></div>

      <div className="TextBox-2">
        <span>General</span>
        <Grid container spacing={2}>
          <Grid item xs={6} className="GridItem">
            <Paper className='Paper'>About</Paper>
          </Grid>
          <Grid item xs={6} className="GridItem" onClick={scrollToProjects}>
            <Paper className='Paper'>Projects</Paper>
          </Grid>
          <Grid item xs={6} className="GridItem">
            <Paper className='Paper'>Experience</Paper>
          </Grid>
          <Grid item xs={6} className="GridItem" onClick={scrollToContact}>
            <Paper className='Paper'>Contact</Paper>
          </Grid>
        </Grid>
      </div>

      <div className="TextBox-3">
        <span>Carlos Akel</span>
        <Grid container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Paper style={{ backgroundColor: 'black', color: 'white', fontSize: "14px", padding: "15px" }} xs={6}>Software Engineer</Paper>
          <Paper style={{ backgroundColor: 'black', color: 'white', fontSize: "14px", padding: "15px" }} xs={6}>Full-Stack Developer</Paper>
        </Grid>
      </div>
    </div>
  );
}
