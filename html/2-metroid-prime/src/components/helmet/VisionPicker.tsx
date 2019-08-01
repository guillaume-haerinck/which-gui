import React, { Component } from 'react';
import styled from 'styled-components';

const VisionPickerContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export default class VisionPicker extends Component {
  render() {
    return (
      <VisionPickerContainer>
        <p>VisionPicker works !</p>
      </VisionPickerContainer>
    )
  }
}
