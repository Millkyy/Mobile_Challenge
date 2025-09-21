import styled from 'styled-components/native';

export const Screen = styled.View`
  flex: 1;
  background-color: #1A1A1A;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})``;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-bottom: 24px;
  text-align: center;
`;

export const ProfileText = styled.Text`
  font-weight: bold;
  color: #FFC107;
`;

export const Card = styled.View`
  width: 100%;
  max-width: 500px;
  background-color: #333;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const CardDesc = styled.Text`
  color: #ddd;
  font-size: 14px;
`;

export const BlockedWrap = styled.View`
  flex: 1;
  background-color: #1A1A1A;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const BlockedText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

export const BlockedButton = styled.TouchableOpacity`
  background-color: #FFC107;
  border-radius: 6px;
  padding: 14px 32px;
`;

export const BlockedButtonText = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;
