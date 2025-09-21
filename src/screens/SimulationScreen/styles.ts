import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  background-color: #1A1A1A;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
`;

export const QuestionText = styled.Text`
  font-size: 20px;
  color: #fff;
  text-align: center;
  margin: 16px 0 24px 0;
`;

export const OptionBtn = styled.TouchableOpacity`
  width: 100%;
  max-width: 500px;
  background-color: #333;
  border-radius: 6px;
  padding: 14px 16px;
  margin-bottom: 12px;
`;

export const OptionText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const Progress = styled.Text`
  margin-top: 16px;
  color: #FFC107;
  font-size: 14px;
`;
