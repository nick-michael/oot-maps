import React, { Component } from 'react';

import moveSound from './audio/oot-sub-move.mp3';
import selectSound from './audio/oot-sub-select.mp3';
import { groupedKeys } from './constants/keys';
import * as maps from './constants/maps';
import MapInterface from './MapInterface';



import './App.css';

class App extends Component {
  state = {
    maps: undefined,
  }

  getBadges = () => (
    groupedKeys.map((group, i) => (
      <div key={i} className={`badge__row ${this.state.maps ? 'badge__row--hidden' : ''}`}>
        {group.map(key => (
          <div key={key} className="badge" onClick={() => this.setState({ maps: key })}>
            <img className={`badge__image badge__image--${key}`} src={maps[key].badge} alt={key} />
          </div>
        ))}
      </div>
    ))
  )

  render() {
    return (
      <div className="App">
        <div className="navbar">
          {this.state.maps && <div className="back" onClick={() => this.setState({ maps: undefined })}>←</div>}
          <div className="title">Ocarina Of Time - Dungeon Maps</div>
        </div>
        {this.getBadges()}
        {this.state.maps && <MapInterface mapKey={this.state.maps} />}
        <audio id="audio-move-0" src={moveSound}/>
        <audio id="audio-move-1" src={moveSound}/>
        <audio id="audio-move-2" src={moveSound}/>
        <audio id="audio-move-3" src={moveSound}/>
        <audio id="audio-move-4" src={moveSound}/>
        <audio id="audio-select-0" src={selectSound}/>
        <audio id="audio-select-1" src={selectSound}/>
        <audio id="audio-select-2" src={selectSound}/>
        <audio id="audio-select-3" src={selectSound}/>
        <audio id="audio-select-4" src={selectSound}/>
      </div>
    );
  }
}

export default App;
