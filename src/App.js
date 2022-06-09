import logo from './logo.svg';
import './App.css';
import TableTest from './components/TableTest.jsx'
import TableCuentas from './components/TableCuentas.jsx'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';


const CssTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});

function App() {
  const [datos, setDatos] = useState({
    fecha: '',
    intereses: '',
    iva: '',
    anioComercial: ''
  })

  const [buttonActive, setButtonActive] = useState(true)

  const handleInputChange = (event) => {
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
    if(Object.values(datos).map(dato => dato.length > 0)) {
      setButtonActive(false)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Prueba Banregio</h2>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='datosTexto'>
        <h2>Ingresar datos</h2>
        <Box>
          <CssTextField label='Fecha Actual' name='fecha' onChange={handleInputChange}/><br/><br/>
          <CssTextField label='Tasa Interés' name='intereses' onChange={handleInputChange}/><br/><br/>
          <CssTextField label='Tasa IVA' name='iva' onChange={handleInputChange}/><br/><br/>
          <CssTextField label='Días Año Comercial' name='anioComercial' onChange={handleInputChange}/><br/><br/>
        </Box>
        <Button variant="contained" endIcon={<SendIcon />} disabled={buttonActive}>
          Send
        </Button>
      </div>
      <div className='tableTest'>
        <h2>Préstamos</h2>
        <TableTest></TableTest>
      </div>
      <div className='tableTest'>
        <h2>Cuentas de Débito</h2>
        <TableCuentas></TableCuentas>
      </div>
    </div>
  );
}

export default App;
