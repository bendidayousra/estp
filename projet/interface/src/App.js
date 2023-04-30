import './App.css';
import React from 'react';
import { BrowserRouter ,  Routes, Route } from 'react-router-dom';
import Commande from './pages/Commande';
import Formulaire from './pages/Formulaire';
function App() {
  return (
  <>
    <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={ <Commande />} />
            <Route path="/formulaire" element={<Formulaire />} />
          </Route>
        </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
