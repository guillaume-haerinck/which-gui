import React, { Component } from 'react';
import styled from 'styled-components';

import reference from '../assets/images/reference.png';
import background from '../assets/images/HUD.png';

import LifeBar from '../components/helmet/LifeBar';
import DangerLevel from '../components/helmet/DangerLevel';
import Map from '../components/helmet/Map';
import MissileLevel from '../components/helmet/MissileLevel';
import Radar from '../components/helmet/Radar';
import VisionPicker from '../components/helmet/VisionPicker';
import WeaponPicker from '../components/helmet/WeaponPicker';

const CenterContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HelmetContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 178vh; /* Prevent scrolling if aspect ratio unsuported */
  display: grid;
  grid-template-rows: 1fr auto 1fr;
`;

const HelmetTop = styled.div`
  background-color: red;
`;

const HelmetBottom = styled.div`
  background-color: red;
`;

const HudContainer = styled.div`
  height: 0;
  padding-top: 50%; /* Keep aspect ration */
  position: relative;
`;

const Hud = styled.div`
  position: absolute;
  top: 0;
  left: 20%;
  width: 60%;
  height: 100%;

  background-image: url(${background});
  background-size: auto 90%;
  background-repeat: no-repeat;
  background-position: top;
`;


export default class Helmet extends Component {
  render() {
    return (
      <CenterContainer>
        <HelmetContainer>
          <HelmetTop></HelmetTop>

          <HudContainer>
            <Hud>

            </Hud>
          </HudContainer>

          <HelmetBottom></HelmetBottom>
        </HelmetContainer>
      </CenterContainer>
    )
  }
}
