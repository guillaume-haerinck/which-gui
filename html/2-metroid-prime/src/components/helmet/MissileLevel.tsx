import React, { Component } from 'react';
import styled from 'styled-components';
import missile from '../../assets/images/Missiles.png';

const MissileLevelContainer = styled.div`
  position: absolute;
  top: ${props => (props as any).top}%;
  right: 4.5%;
  width: 7.5%;
  transition-property: top;
  transition-duration: 2s;
` as any;

const Missile = styled.img`
  width: 100%;
  height: auto;
`;

export default class MissileLevel extends Component {
  state = { position: 57 }

  increment = () => {
    if (this.state.position - 15 > 24 )
      this.setState({ position: this.state.position - 15 }) 
  }

  render() {
    return (
      <MissileLevelContainer top={this.state.position} onClick={this.increment}>
        <Missile src={missile}></Missile>
      </MissileLevelContainer>
    )
  }
}
