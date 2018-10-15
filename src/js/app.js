import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = () => {
  return (
    <div className="app">
      <div className="content">
        <h1>MEAN Boilerplate</h1>
        <h2><FontAwesomeIcon icon={['fab', 'node-js']}/> Node.js</h2>
        <h2><FontAwesomeIcon icon={['fab', 'react']}/> React.js</h2>
      </div>
      <div className="links">
        <button className="btn"><FontAwesomeIcon icon={['fab', 'github']}/> Github</button>
        <button className="btn"><FontAwesomeIcon icon={['fab', 'bitbucket']}/> Bitbucket</button>
      </div>
    </div>
  )
}

export default App;
