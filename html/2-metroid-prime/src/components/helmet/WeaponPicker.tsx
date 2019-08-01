import React, { Component } from 'react';
import styled from 'styled-components';

const WeaponPickerContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export default class WeaponPicker extends Component {
  render() {
    return (
      <WeaponPickerContainer>
        <p>WeaponPicker works !</p>
      </WeaponPickerContainer>
    )
  }
}
