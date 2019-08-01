import React, { Component } from 'react';
import styled from 'styled-components';

const MissileLevelContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
`;

export default class MissileLevel extends Component {
  render() {
    return (
      <MissileLevelContainer>
        <p>MissileLevel works !</p>
      </MissileLevelContainer>
    )
  }
}
