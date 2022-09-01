import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Toolbar } from '@mui/material';
import Dashboard from './pages/dashboard';
import CompanyHistory from './pages/company/companyHistory';
import CompanyRegister from './pages/company/companyRegister';
import CompanySearch from './pages/company/companySearch';
import VisitRegister from './pages/visit/visitRegister';
import VisitHistory from './pages/visit/visitHistory';
import TakeoutRegister from './pages/takeout/takeoutRegister';
import TakeoutHistory from './pages/takeout/takeoutHistory';
import TakeoutHistoryByTeam from './pages/takeout/takeoutHistoryByTeam';
import AccessRegister from './pages/access/accessRegister';
import AccessHistory from './pages/access/accessHistory';

function App() {
  const mdTheme = createTheme();

  return (
    <BrowserRouter>
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <Navbar/>
        <Sidebar/>
        <div style={{width: '100%'}}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
            theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
              <Routes>
                <Route path="/" element={<Dashboard/>} ></Route>
                <Route path="/company/search" element={<CompanySearch/>}></Route>
                <Route path="/company/register" element={<CompanyRegister/>}></Route>
                <Route path="/company/history" element={<CompanyHistory/>}></Route>
                <Route path="/visit/register" element={<VisitRegister/>}></Route>
                <Route path="/visit/history" element={<VisitHistory/>}></Route>
                <Route path="/takeout/register" element={<TakeoutRegister/>}></Route>
                <Route path="/takeout/history" element={<TakeoutHistory/>}></Route>
                <Route path="/takeout/history/team" element={<TakeoutHistoryByTeam/>}></Route>
                <Route path="/access/register" element={<AccessRegister/>}></Route>
                <Route path="/access/history" element={<AccessHistory/>}></Route>
                <Route path="*" element={<p>Not Found</p>}></Route>
              </Routes>
          </Box>
        </div>
        </Box>
    </ThemeProvider>
  </BrowserRouter>
  );
}

export default App;
