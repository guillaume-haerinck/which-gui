import React, { Component } from 'react';
import './Helmet.module.scss';

import LifeBar from '../components/helmet/LifeBar';
import DangerLevel from '../components/helmet/DangerLevel';
import Map from '../components/helmet/Map';
import MissileLevel from '../components/helmet/MissileLevel';
import Radar from '../components/helmet/Radar';
import VisionPicker from '../components/helmet/VisionPicker';
import WeaponPicker from '../components/helmet/WeaponPicker';

export default class Helmet extends Component {
  render() {
    return (
      <div className="helmet">
        <div>
          <Radar></Radar>
          <DangerLevel></DangerLevel>
          <VisionPicker></VisionPicker>
        </div>

        <div>
          <LifeBar></LifeBar>
        </div>

        <div>
          <Map></Map>
          <MissileLevel></MissileLevel>
          <WeaponPicker></WeaponPicker>
        </div>
      </div>
    )
  }
}
