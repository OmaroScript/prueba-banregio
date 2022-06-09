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
  const [buttonActive, setButtonActivbe] = useState(true)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='datosTexto'>
        <h2>Ingresar datos</h2>
        <Box>
          <CssTextField label='Fecha Actual'/><br/><br/>
          <CssTextField label='Tasa Interés' /><br/><br/>
          <CssTextField label='Tasa IVA'/><br/><br/>
          <CssTextField label='Días Año Comercial'/><br/><br/>
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

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
