import React, { Component } from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export default class Map extends Component {
  render() {
    return (
      <MapContainer>
        <p>Map works !</p>
      </MapContainer>
    )
  }
}
