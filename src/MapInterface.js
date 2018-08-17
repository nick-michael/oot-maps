import React, { Component } from 'react';

import * as maps from './constants/maps';

class MapInterface extends Component {
  initialFloor = maps[this.props.mapKey].initialFloor
  maps = maps[this.props.mapKey].maps
  badge = maps[this.props.mapKey].badge
  state = {
    selectedFloor: this.initialFloor,
    hoveredFloor: undefined,
  }

  getActiveFloor = () => ( this.state.hoveredFloor || this.state.selectedFloor );

  handleClick = (floor, i) => {
    const selectAudio = document.getElementById(`audio-select-${i}`);
    selectAudio.play();
    this.setState({ selectedFloor: floor });
  }

  handleMouseEnter = (floor, i) => {
    if (floor !== this.getActiveFloor()) {
      const moveAudio = document.getElementById(`audio-move-${i}`);
      moveAudio.play();
    }
    this.setState({ hoveredFloor: floor });
  }

  handleMouseLeave = () => {
    this.setState({ hoveredFloor: undefined });
  }

  render() {
    return (
      <div className="map-interface">
        <div className="maps__badge">
          <div className="badge">
            <img className={`badge__image badge__image--${this.props.mapKey}`} src={this.badge} alt={this.props.mapKey} />
          </div>
        </div>
        <div className="maps__container">
          {Object.keys(this.maps).map(floor => (
            <div key={floor} className={`maps__map ${this.getActiveFloor() === floor ? 'maps__map--active' : ''}`}>
              <img className="maps__image" src={this.maps[floor]} alt={floor} />
            </div>
          ))}
          <div className="floors__container">
            {Object.keys(this.maps).map((floor, i) => (
              <div
                key={floor}
                className="floors__floor"
                onMouseEnter={() => this.handleMouseEnter(floor, i)}
                onMouseLeave={this.handleMouseLeave}
                onClick={() => this.handleClick(floor, i)}
              >{floor}</div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MapInterface;
