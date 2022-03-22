import { useState, useContext } from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, LoginContainer, TopContainer, SignUpButton, Title, Text } from  './styles';

import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import DropAnimation from '../../components/DropAnimation';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

import AuthContext from '../../contexts/auth';

const Login = () => {
    const[loginInput, setLoginInput] = useState('');
    const[passwordInput, setPasswordInput] = useState('');

    const navigation = useNavigation();

    const height = Dimensions.get('window').height;
    const statusBarHeight = height > 640 ? 0 : 24;
        
    const { signIn } = useContext(AuthContext);

    async function handleSignIn(){
        signIn();
    }

    return(
        <KeyboardAvoidingWrapper>
        <Container height={height - statusBarHeight}>
        <LoginContainer>
            <DropAnimation>
                <TopContainer>
                    <Logo />
                    <Title>Notes.io</Title>
                </TopContainer>
            </DropAnimation>
            <TextInput 
            placeholder='Login...' 
            value={loginInput}
            onChangeText={(loginInput) => setLoginInput(loginInput)}/>

            <TextInput 
            placeholder='Password...' 
            value={passwordInput}
            onChangeText={(passwordInput) => setPasswordInput(passwordInput)}
            password={true}/>

            <Button onPress={handleSignIn} TextButton='Sign In'/>
            <DropAnimation isDelay={{delay: 200}}>
            <SignUpButton activeOpacity={1}>
                <Text>Don't have an account? </Text>
                <SignUpButton 
                onPress={() => {
                    navigation.replace('Register');
                }}
                activeOpacity={0.5}>
                    <Text isButton>Sign Up</Text>
                </SignUpButton>
            </SignUpButton>
            </DropAnimation>
        </LoginContainer>
        </Container>
        </KeyboardAvoidingWrapper>
    );
}

export default Login;