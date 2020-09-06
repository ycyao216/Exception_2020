import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CreateUser from './components/create-user';
import CreateProject from './components/create-project';
import ProjectList from './components/project-list';
//import NavBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={ProjectList}></Route>
        <Route path="/user" component={CreateUser}></Route>
        <Route path="/tweet" component={CreateProject}></Route>
      </Router>  
    </div>
  );
}

export default App;