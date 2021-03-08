import React from 'react';
import './App.css';
import UiHelpers from './ui-helpers'
import {BrowserRouter} from "react-router-dom";
import Axios from "./Axios";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UiHelpers.PrivateAccess currentRoles={['Miller', 'triller']} expectedRoles={['killer', 'hiller', 'triller']}>
          <h2>Private access</h2>
        </UiHelpers.PrivateAccess>
        <UiHelpers.PrivateRouter
          currentRoles={['Miller', 'triller']}
          expectedRoles={['killer', 'hiller', 'triller']}
          // authenticated
          path={'/haha'}
        >
          <h2>Private router</h2>
        </UiHelpers.PrivateRouter>
        <Axios/>
      </BrowserRouter>
    </div>
  );
}

export default App;
