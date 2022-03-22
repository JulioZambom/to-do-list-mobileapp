import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 40px;
    margin-top: 17px;
`;

export const Input = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.white};
    flex: 1;
    font-size: 13px;
    border-radius: 20px;
    padding-left: 24px;
    font-family: ${({ theme }) => theme.fonts.SEMIBOLD};
    color: ${({ theme }) => theme.colors.black};
`;
