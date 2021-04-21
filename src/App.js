import React from 'react';
import './App.css';
import Header from './components/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';

 class App extends React.Component{
   constructor(props)
   {
     super(props);
   }

   render(){
    return(
      <Router>
        <Nav />
       <Route exact path="/">
          <Header />
        </Route>
      <Route path="/home" component={Header}/>
      </Router>
    );  
    }
 }

export default App;
