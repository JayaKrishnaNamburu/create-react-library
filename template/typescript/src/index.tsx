/**
 * @class ExampleComponent
 */

import React from 'react'
import styled from '@emotion/styled';

export type Props = { text: string }

const ExampleComponent: React.FC<Props> = ({ text }) => {
  return (
    <Wrapper>
      Example Component { text }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 10px;
  border; 10px solid; 
`;

export default ExampleComponent;

