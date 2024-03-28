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
    title: 'Software Engineer',
    company: 'XYZ Solutions',
    date: 'January 2020 - Present',
    description: 'SAMPLE'
  },
  {
    title: 'Frontend Developer Intern',
    company: 'ABC Technologies',
    date: 'May 2019 - December 2019',
    description: 'SAMPLE'
  },
  {
    title: 'Task Of Testing',
    company: 'ABC Technologies',
    date: 'May 2019 - December 2019',
    description: 'SAMPLE INFO'
  },
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