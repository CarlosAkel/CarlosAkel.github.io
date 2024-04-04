import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';


const experiences = [
  {
    title: 'Snow Consulting (December 2022 - January 2023)',
    company: 'Professional Internship',
    description: 'Creation of information filters within the database corresponding to the bot portal used within the company.'
  },
  {
    title: 'Snow Consulting (August - December 2022)',
    company: 'Part-Time Work',
    description: 'Establishment of the foundation for a new bot implementation within the company.'
  },
  {
    title: 'Talana (January - February 2022)',
    company: 'Pre-Professional Internship',
    description: 'Development of the interface for the attendance and shift module (now in production), using Vue with Django backend. Code testing within the company, ensuring implementation quality.'
  },
  {
    title: 'Clínica Somno (July - August 2023)',
    company: 'Junior Back-End Developer',
    description: 'Incremental development of the company\'s core platform and database management.'
  }
];



const Experience = () => {
    return (
      <div className="experience-container" style={{color: "white"}}>
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot />
                {index !== experiences.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6" gutterBottom>
                  {experience.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {experience.company}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {experience.date}
                </Typography>
                <Typography variant="body1" style={{ marginTop: 10 }}>
                  {experience.description}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    );
  };
  
  export default Experience;