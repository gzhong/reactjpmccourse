import * as React from 'react';

import {Provider} from 'react-redux';

import '../Assets/styles/application.css';

import Footer from '../Boilerplate/Footer';
import Header from '../Boilerplate/Header';
import Landing from '../Landing/Landing';

class App extends React.Component {
  public render() {
    return (
      <div className="app">
        <Header/>
        <div className="app-content">
        <Landing/>
        <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
