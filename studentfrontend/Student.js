import * as React from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function StudentComp() {
  const paperStyle = { padding: "50px 20px", witdth: 600, margin: "20px auto" };

  const[name,setName]=useState('')
  const[address,setAddress]=useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const student={name,address}
    console.log(student)

    fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

    }).then(()=>{
      console.log("New Student added")
    })


  }


  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: blue[600] }}>
          <u>Add Student</u>
        </h1>

        <TextField
          fullWidth id="outlined-basic" label="Student Name" variant="outlined"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <TextField
          fullWidth id="outlined-basic" label="Student Address" variant="outlined"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <Button variant="contained" onClick={handleClick}>Submit</Button>
        
      </Paper>
    </Container>
  );
}




