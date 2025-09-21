import React from "react";
import styled from "styled-components/native";

const Btn = styled.TouchableOpacity`
  background-color: #ffc107;
  padding: 14px 60px;
  border-radius: 6px;
`;
const Txt = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

export const LogoutButton: React.FC<{ onPress: () => void }> = ({
  onPress,
}) => (
  <Btn onPress={onPress} accessibilityRole="button">
    <Txt>Sair</Txt>
  </Btn>
);
