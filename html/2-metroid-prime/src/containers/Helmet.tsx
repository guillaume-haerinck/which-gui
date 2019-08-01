import React, { Component } from 'react';
import styled from 'styled-components';

import reference from '../assets/images/reference.png';
import background from '../assets/images/HUD.png';
import top from '../assets/images/Helmet-Top.png';
import bottom from '../assets/images/Helmet-Bottom.png';

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
  width: 62%;
  max-width: 120vh; /* Prevent scrolling if aspect ratio unsuported */
  display: grid;
  align-content: center;
  padding-bottom: 4vh; /* Decals HUD to match the reference */
`;

const HudContainer = styled.div`
  height: 0;
  padding-top: 77%; /* Aspect ratio of the HUD image */
  position: relative;
`;

const Hud = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url(${background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
`;

export default class Helmet extends Component {
  render() {
    return (
      <CenterContainer>
        <HelmetContainer>
          <HudContainer>
            <Hud>

            </Hud>
          </HudContainer>
        </HelmetContainer>
      </CenterContainer>
    )
  }
}
