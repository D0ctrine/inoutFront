import './App.css';
import Dashboard from './pages/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const mdTheme = createTheme();
  return (
    <BrowserRouter>
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Navbar/>
        <Sidebar/>
        <div style={{width: '100%'}}>
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="*" element={<p>NotFound</p> }></Route>
          </Routes>
        </div>
        </Box>
        <Footer/>
    </ThemeProvider>
  </BrowserRouter>
  );
}

export default App;
