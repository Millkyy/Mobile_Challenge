import React from 'react';
import styled from 'styled-components/native';

const Box = styled.View`
  background-color: #FFC107;
  padding: 1px;
  border-radius: 7px;
  margin-bottom: 12px;
`;
const Img = styled.Image`
  width: 40px; height: 40px;
`;

export const Logo: React.FC = () => (
  <Box>
    <Img source={require('../../../assets/logo-xp.png')} resizeMode="contain" />
  </Box>
);
