import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import SignIn from './components/SignIn'
import Home from './components/Home'
import {auth} from './firebase/firebase'
import { onAuthStateChanged } from "firebase/auth";
import './App.css';

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true)
  auth.onAuthStateChanged((user) => {
    if(user){
      return setIsUserSignedIn(true)
    } else {
      return setIsUserSignedIn(false)
    }
  })
  if(isUserSignedIn) {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    )
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/" component={SignIn}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
