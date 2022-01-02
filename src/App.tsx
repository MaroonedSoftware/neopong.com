import React from 'react';
import './App.css';
import { Grid, Stack } from '@mui/material';
import ProfileCard from './components/ProfileCard';
import GameCard from './components/GameCard';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';

function App() {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <h1>About</h1>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        <ProfileCard name='Charles Galyon' image='/cg.png' description='Design and Scripting' linkedin='https://www.linkedin.com/in/cgalyon/' />
        <ProfileCard name='Eric Stamm' image='/es.png' description='Music and SFX' linkedin='https://www.linkedin.com/in/eric-stamm-a84229106/' />
        <ProfileCard name='Robert Dean' image='/rd.png' description='Programming' linkedin='https://www.linkedin.com/in/knoxcoder/' />
      </Grid>
      <h1>Games</h1>
      <Timeline position="alternate" sx={{ width: 500 }}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <GameCard image="/World-Reborn-box.png" name="World Reborn" />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <GameCard image="/Strawberry Shortcake - Ice Cream Island Riding Camp.jpg" name="Strawberry Shortcake - Ice Cream Island Riding Camp" />
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>
            <GameCard image="/cheetah girls.jpg" name="cheetah girls" />
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Stack>
  );
}

export default App;
