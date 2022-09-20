import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import OverzichtPage from './pages/Overzicht';
import BlogpostPage from './pages/Blogpost';

function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  //const [isAuthenticated, toggleIsAuthenticated ] = useState(false);

  return (
      <>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/overzicht">
          <OverzichtPage />
        </Route>
        <Route path="/blogpost/:Id">
          <BlogpostPage />
        </Route>
      </Switch>
      </>
      );
}

export default App;
