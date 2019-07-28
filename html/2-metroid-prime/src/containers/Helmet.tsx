import React, { Component } from 'react';
import styled, { ThemedStyledFunction, StyledFunction } from 'styled-components';

import LifeBar from '../components/helmet/LifeBar';
import DangerLevel from '../components/helmet/DangerLevel';
import Map from '../components/helmet/Map';
import MissileLevel from '../components/helmet/MissileLevel';
import Radar from '../components/helmet/Radar';
import VisionPicker from '../components/helmet/VisionPicker';
import WeaponPicker from '../components/helmet/WeaponPicker';

const HelmetContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 100%;
  width: 100%;
`;

const Hud = styled.div`
  display: grid;
  grid-row: 2;
  grid-template-columns: 1fr 1fr 1fr;
  justify-self: center;
`;

const Column = styled.div`
  display: grid;
  grid-column: ${props => (props as any).position || 0 };
  grid-auto-flow: row;
  background-color: red;
` as any;

const HelmetTop = styled.div`
  grid-row: 1;
`;

const HelmetBottom = styled.div`
  grid-row: 3;
`;

export default class Helmet extends Component {
  render() {
    return (
      <HelmetContainer>
        <HelmetTop></HelmetTop>

        <Hud>
          <Column position="1">
            <Radar></Radar>
            <DangerLevel></DangerLevel>
            <VisionPicker></VisionPicker>
          </Column>

          <Column position="2">
            <LifeBar></LifeBar>
          </Column>

          <Column position="3">
            <Map></Map>
            <MissileLevel></MissileLevel>
            <WeaponPicker></WeaponPicker>
          </Column>
        </Hud>

        <HelmetBottom></HelmetBottom>
      </HelmetContainer>
    )
  }
}
