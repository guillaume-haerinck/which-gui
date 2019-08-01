import React, { Component } from 'react';
import styled from 'styled-components';

const RadarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export default class Radar extends Component {
  render() {
    return (
      <RadarContainer>
        <p>Radar works !</p>
      </RadarContainer>
    )
  }
}
