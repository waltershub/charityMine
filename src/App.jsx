import React, { Component } from 'react';
import logo from './manmining.jpg';
import coin from './monero_gold_front.png';
import './App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor() {
    super();
    // this.startMining();
    this.state = {
      charties: ['BKLA', 'KhalSH'],
      selected: null,
      spinClass: 'coin',
      totalHashes: 0,
    };
    this.startMining = this.startMining.bind(this);
    this.stopMining = this.stopMining.bind(this);
  }
  startMining() {
    if (!this.state.selected) {
      alert('please Select a charity');
    } else if (window.isRunning()) {
      alert('you are already Mining');
    } else {
      console.log('jsx', this.state.selected.value);
      const charity = this.state.selected.value + new Date();
      console.log(charity);
      window.mine(charity);
      this.setState({ spinClass: 'coinSpin' });
      this.updateHashes = setInterval(() => {
        this.setState({ totalHashes: this.state.totalHashes + window.getHashes() });
      }, 3000);
    }
  }

  stopMining() {
    console.log(window.isRunning());
    if (!window.isRunning()) {
      alert('you were not Mining');
    } else {
      window.stopMining();
      this.setState({ spinClass: 'coin' });
      clearInterval(this.updateHashes);
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
          <div className="startButton">
            <Button variant="raised" size="large" color="primary" onClick={this.startMining}>
              Start Mining
            </Button>
            <Button
              variant="raised"
              size="large"
              color="secondary"
              style={styles.stopButton}
              onClick={this.stopMining}
            >
              Stop Mining
            </Button>
          </div>
        </div>
        <img src={coin} className={this.state.spinClass} alt="logo" />
        <h2>{`Total Hashes: ${this.state.totalHashes}`}</h2>
        <h2>HOW IT WORKS</h2>
        <h3 className="expla">
          By allowing the Monero blockchain to use your CPU for calulations, the Charity you
          selected is credited with a small amount of cryptocurrency (it adds up!).
        </h3>
        <h3>
          This proccess is completely sandboxed to this browser tab and nothing about your computer
          is shared. Click the stop button or close this browser tab to stop.
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

const styles = {
  stopButton: {
    'background-color': '#FF0000',
  },
};
