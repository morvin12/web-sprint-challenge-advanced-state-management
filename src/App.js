import React, { Component } from "react";
import { connect } from "react-redux";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs } from "./actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = (props)=> {
  console.log(props)
  return (
    <div className="App">
      <Header />

      <main>
        <SmurfList/>
        <AddForm/>
      </main>
    </div>
  );
}

const mapState = (state) => {
  return state;
}

export default connect(mapState)(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.