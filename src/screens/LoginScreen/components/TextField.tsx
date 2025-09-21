import React from 'react';
import styled from 'styled-components/native';

const InputBase = styled.TextInput`
  width: 100%;
  background-color: #333;
  border-radius: 6px;
  padding: 12px 16px;
  color: #fff;
  margin-bottom: 16px;
  max-width: 400px;
`;

type Props = React.ComponentProps<typeof InputBase>;

export const TextField: React.FC<Props> = (props) => <InputBase {...props} />;
