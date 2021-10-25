import logo from './logo.svg';
//import './App.css';
import  Navbar  from './components/Navbar'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { Individualbots } from './components/Individualbots';
import {Bots} from './components/Bots'
import './components/design.css'

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Switch>
        <Route path='/' exact>
          <Redirect to='/Bots'/></Route>
        <Route path='/Bots-details/:id' >< Individualbots /></Route>
        <Route path='/Bots' >< Bots /></Route>
      </Switch>
    </div>
  );
}

export default App;
