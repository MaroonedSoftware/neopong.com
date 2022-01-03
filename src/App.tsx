import React from 'react';
import './App.css';
import { Grid, Stack } from '@mui/material';
import ProfileCard from './components/ProfileCard';
import GameCard from './components/GameCard';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';
import { ReactComponent as GbaLogo } from './components/gba.svg';
import { ReactComponent as DsLogo } from './components/ds.svg';

function App() {

  const games = [{
    'title': 'World Reborn',
    'image': '/World-Reborn-box.png',
    'gba': true
  },
  {
    'title': 'Proud Family',
    'image': '/proud_family.jpg',
    'gba': true
  }, 
  {
    'title': 'Strawberry Shortcake - Ice Cream Island Riding Camp',
    'image': '/Strawberry Shortcake - Ice Cream Island Riding Camp.jpg',
    'gba': true
  },
  {
    'title': 'Cheetah Girls',
    'image': '/cheetah girls.jpg',
    'gba': true
  },
  {
    'title': 'Little Mermaid Magic in Two Kingdoms',
    'image': '/Little_Mermaid_Magic_in_Two_Kingdoms.jpg',
    'gba': true
  },
  {
    'title': 'Barbie Diaries High School Mystery',
    'image': '/Barbie_Diaries_High_School_Mystery.jpg',
    'gba': true
  },
  {
    'title': 'Strawberry Shortcake Sweet Dreams',
    'image': '/Strawberry_Shortcake_Sweet_Dreams.jpg',
    'gba': true
  },
  {
    'title': 'Hannah Music Jam',
    'image': '/hannah-montana-music-jam.jpg',
    'gba': false
  },
  {
    'title': 'Nancy Drew: The deadly secret of olde world park',
    'image': '/nancy-drew-the-deadly-secret-of-olde-world-park.jpg',
    'gba': false
  }];

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

        {games.map(x => (
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                {x.gba ? (<GbaLogo />) : (<DsLogo />)}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <GameCard image={x.image} name={x.title} />
            </TimelineContent>
          </TimelineItem>
        ))};
      </Timeline>
    </Stack>
  );
}

export default App;
