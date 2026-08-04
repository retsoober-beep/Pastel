import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField'
import SendIcon from '@mui/icons-material/Send'
import Button from '@mui/material/Button'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div> <p style={{ textAlign: "center", fontSize: "30px" }}>Lista de Tarefas</p>
      </div>
      <div style={{display:"row"}}> <div style={{marginLeft:"3px"}}></div>
        <TextField sx={{ width: "90vw" }} id="standard-basic" label="" variant="standard" />
        
          <Button variant="contained" endIcon={<SendIcon />}>Send</Button>




      </div>
    </div>
  )
}

export default App
