import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PetsPage from './view/PetsPage';
import PortalPetPage from './view/PortalPetPage';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row'> 
          <div className='col'>
            <BrowserRouter>
              <Switch>
                <Route path='/' exact component={PetsPage} />
                <Route path='/pets' exact component={PetsPage} />
                <Route path='/portal' exact component={PortalPetPage} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
