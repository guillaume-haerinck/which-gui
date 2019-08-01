import React, { Component } from 'react';
import styled from 'styled-components';

const DangerLevelContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
`;

export default class DangerLevel extends Component {
  render() {
    return (
      <DangerLevelContainer>
        <p>DangerLevel works !</p>
      </DangerLevelContainer>
    )
  }
}
