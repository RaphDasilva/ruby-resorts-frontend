import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from './components/layout';
import MainPage from './components/mainpage/mainPage';
import ReservePage from './newreservation/newReservePage';
import Details from './components/detailspage/Details';
import AddRoom from './components/addRoom/AddRoom';
import DeleteRoom from './components/deleteRoom/DeleteRoom';

const App = () => (
  <Box
    id="App"
    sx={{
      display: { sx: 'block', sm: 'flex' },
      position: 'relative',
    }}
  >
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route path="newreservepage/:roomId" element={<ReservePage />} />
      <Route exact path="/details/:roomId" element={<Details />} />
      <Route exact path="/add" element={<AddRoom />} />
      <Route exact path="/delete" element={<DeleteRoom />} />
    </Routes>
  </Box>
);

export default App;
