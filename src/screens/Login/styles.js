import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  padding-top: 140px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LoginContainer = styled.View`
  width: 85%;
  height: 435px;
  align-items: center;
`;

export const Text = styled.Text`
  margin-top: 7px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
  color: ${({ theme, isButton }) =>
    isButton ? theme.colors.purple : theme.colors.gray["200"]};
  padding: 0px 4px 10px 0px;
`;

export const SignUpButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
  font-size: 36px;
  margin-left: 12px;
`;
