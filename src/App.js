import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Team from './components/Team/Team';
import Profile from './components/Team/Profile/Profile';
import Admin from './components/Admin/Admin';
import Create from './components/Admin/Create/Create';
import Header from './components/Layout/Header';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={ <Team /> } />
          <Route path='/profile' element={ <Profile></Profile> } />
          <Route path='/admin' element={ <Admin /> } />
          <Route path='/create-team-member' element={ <Create /> } />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
