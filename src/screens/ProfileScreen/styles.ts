import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1A1A1A;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const AvatarWrap = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 60px;
  background-color: #555;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  overflow: hidden;
`;

export const Avatar = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 50px;
`;

export const Name = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  margin-bottom: 8px;
  text-align: center;
`;

export const Email = styled.Text`
  font-size: 16px;
  color: #ddd;
  margin-bottom: 32px;
  text-align: center;
`;
