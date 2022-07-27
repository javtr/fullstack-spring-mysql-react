import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

export default function StudentComp() {
    const paperStyle = {padding:'50px 20px', witdth:600, margin:'20px auto'};

  return (

    <Container >
        <Paper elevation={3} style={paperStyle}>
            <TextField fullWidth id="outlined-basic" label="Student Name" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Student Address" variant="outlined" />
        </Paper>
    </Container>

  );
}
