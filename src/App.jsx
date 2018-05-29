import React, { Component } from 'react';
import logo from './manmining.jpg';
import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor() {
    super();
    // this.startMining();
    this.state = {
      charties: ['BKLA'],
      selected: null,
    };
    this.startMining = this.startMining.bind(this);
  }
  startMining() {
    if (!this.state.selected) {
      alert('please Select a charity');
    } else {
      console.log('jsx', this.state.selected.value);
      const charity = this.state.selected.value;
      window.mine(charity);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Charity Miner(BETA)</h1>
        </header>
        <div className="body">
          <div className="dropdown">
            <Dropdown
              options={this.state.charties}
              onChange={charity => this.setState({ selected: charity })}
              value={this.state.selected || ''}
              placeholder="Select a charity"
            />
          </div>
          <Button variant="raised" color="primary" onClick={this.startMining}>
            Start Mining
          </Button>
        </div>
        <h2>HOW IT WORKS</h2>
        <h3 className="expla">
          By alowing the Monero blockchain to use your CPU for calulations, the Charity you selected
          is credited with a small amount fo coin (it adds up!). This is proccess is complelty
          sandboxed to this browser tab and nothing about your computer is shared. to stop simply
          close this browser tab.
        </h3>
        <h4>
          for more information or to sign up your charity email{' '}
          <a href="mailto:waltershub@gmail.com" target="_top">
            waltershub@gmail.com
          </a>
        </h4>
      </div>
    );
  }
}

export default App;
