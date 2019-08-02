import React, { Component } from 'react';
import styled from 'styled-components';
import danger from '../../assets/images/Danger.png';

// https://youtu.be/XKgtf12OD8M?t=372
// TODO add arrow and warning message

const DangerLevelContainer = styled.div`
  position: absolute;
  top: ${props => (props as any).top}%;
  left: 4.5%;
  width: 7.5%;
  transition-property: top;
  transition-duration: 2s;
` as any;

const Danger = styled.img`
  width: 100%;
  height: auto;
`;

export default class DangerLevel extends Component {
  state = { position: 57 }

  increment = () => {
    if (this.state.position - 15 > 24 )
      this.setState({ position: this.state.position - 15 }) 
  }

  render() {
    return (
      <DangerLevelContainer top={this.state.position} onClick={this.increment}>
        <Danger src={danger}></Danger>
      </DangerLevelContainer>
    )
  }
}
