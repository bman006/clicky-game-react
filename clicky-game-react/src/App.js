import React, { Component } from 'react';
import './App.css';
import ImageContainer   from './components/ImageContainer';
import ClickImage       from './components/ClickImage';
import imageRefs        from './imageRefs.json';

class App extends Component {
  state = {
    imageRefs
  };

  render() {
    return (
      <ImageContainer>
      {this.state.imageRefs.map(pic => (
        <ClickImage 
          key   = {pic.name}
          name  = {pic.name}
          pic   = {pic.image}
        />
      ))}
      </ ImageContainer>
    );
  }
}

export default App;
