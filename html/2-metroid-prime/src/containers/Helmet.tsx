import React, { Component } from 'react';
import styled from 'styled-components';

import LifeBar from '../components/helmet/LifeBar';
import DangerLevel from '../components/helmet/DangerLevel';
import Map from '../components/helmet/Map';
import MissileLevel from '../components/helmet/MissileLevel';
import Radar from '../components/helmet/Radar';
import VisionPicker from '../components/helmet/VisionPicker';
import WeaponPicker from '../components/helmet/WeaponPicker';

const HelmetContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Hud = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;

export default class Helmet extends Component {
  render() {
    return (
      <HelmetContainer>
        <Hud>
          <div className="left">
            <Radar></Radar>
            <DangerLevel></DangerLevel>
            <VisionPicker></VisionPicker>
          </div>

          <div className="center">
            <LifeBar></LifeBar>
          </div>

          <div className="right">
            <Map></Map>
            <MissileLevel></MissileLevel>
            <WeaponPicker></WeaponPicker>
          </div>
        </Hud>
      </HelmetContainer>
    )
  }
}
