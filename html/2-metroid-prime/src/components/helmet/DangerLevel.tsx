import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import danger from '../../assets/images/Danger.png';

// https://youtu.be/XKgtf12OD8M?t=372
// TODO use transition to smooth big changes

const DangerLevelContainer = styled.div`
  position: absolute;
  //top: 57%;
  //top: 24%;

  top: ${props => (props as any).top}%;

  left: 4.5%;
  width: 7.5%;
` as any;

const Danger = styled.img`
  width: 100%;
  height: auto;
`;

export default class DangerLevel extends Component {
  state = { position: 57 }

  increment = () => { this.setState({ position: this.state.position - 0.5 }) }

  render() {
    return (
      <DangerLevelContainer top={this.state.position} onClick={this.increment}>
        <Danger src={danger}></Danger>
      </DangerLevelContainer>
    )
  }
}
