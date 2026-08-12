import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { create } from "zustand";
import { useTodosStore } from './store/useTodoStore';

function App() {

  const {todos, error, clearTodo, submitTodo, cancelSubmitTodo} = useTodosStore()

  return (
    <div className="App">
      <div> <p style={{ textAlign: "center", fontSize: "30px" }}>Lista de Tarefas</p>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}> <div></div>
        <TextField sx={{ width: "80vw" }} id="standard-basic" label="" variant="standard" />
        <div style={{width:"25px"}}></div>
          <Button variant="contained" endIcon={<SendIcon />}>Enviar</Button>
      </div>
    </div>
  )
}

export default App
