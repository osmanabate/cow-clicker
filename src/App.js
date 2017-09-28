import React from 'react';
// import CowClicker from './CowClicker';
//import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

var CowClicker = React.createClass({displayName: 'CowClicker',
  getInitialState: function() {
    return {
      clicks: 0
    };
  },

  onCowClick: function(evt) {
    this.setState({
      clicks: this.state.clicks + 1
    });
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", null, "Clicks: ", this.state.clicks), 
        React.createElement("img", {
          src: "http://http://pngimages.net/sites/default/files/cow-png-image-58817.png", 
          onClick: this.onCatClick, 
          className: "cow"}
        ), 
        React.createElement("p", null, "Click the cat")
      )
    );
  }
});

ReactDOM.render(
  React.createElement(CatClicker, null),
  document.getElementById('root')
);
