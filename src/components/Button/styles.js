import styled from "styled-components/native";

export const ButtonSubmit = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: ${({ theme }) => theme.colors.purple};
    margin-top: 17px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
`;

export const ButtonSubmitText = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
    font-size: 13px;
`;