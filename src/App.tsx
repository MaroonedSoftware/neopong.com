import React from 'react';
import './App.css';
import { Grid, Stack } from '@mui/material';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <Stack>
      <h1>Founders</h1>
      <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
        <ProfileCard name='Charles Galyon' image='/cg.png' description='Design and Scripting' linkedin='https://www.linkedin.com/in/cgalyon/' />
        <ProfileCard name='Eric Stamm' image='/es.png' description='Music and SFX' linkedin='https://www.linkedin.com/in/eric-stamm-a84229106/' />
        <ProfileCard name='Robert Dean' image='/rd.png' description='Programming' linkedin='https://www.linkedin.com/in/knoxcoder/' />



      </Grid>
    </Stack>
  );
}

export default App;
