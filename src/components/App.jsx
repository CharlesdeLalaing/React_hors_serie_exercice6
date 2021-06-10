import React from 'react';
import Header from '../components/header/Header'

import './app.css'

export default class App extends React.Component {
  render() {
    return (
      <div className='app_div'>
        <Header/>
      </div>
    );
  }
}

