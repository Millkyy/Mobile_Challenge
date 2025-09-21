import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  background-color: #000;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.View`
  width: 85%;
  height: 70%;
  background-color: #1A1A1A;
  border-radius: 10px;
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #FFC107;
  margin-bottom: 24px;
  font-weight: 600;
`;

export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 16px;
  text-align: center;
`;

export const LinkText = styled.Text`
  color: #FFC107;
  font-size: 16px;
`;
