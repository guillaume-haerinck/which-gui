import React, { Component } from 'react';
import styled from 'styled-components';

const LifeBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
`;

export default class LifeBar extends Component {
  render() {
    return (
      <LifeBarContainer>
        <p>LifeBar works !</p>
      </LifeBarContainer>
    )
  }
}
