import { useState, useContext } from 'react';
import { useBackHandler } from '@react-native-community/hooks';
import { Dimensions, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, RegisterContainer, TopContainer, Title, SignUpButton, Text } from  './styles';

import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import DropAnimation from '../../components/DropAnimation';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

import AuthContext from '../../contexts/auth';

const Register = () => {
    const[nameInput, setNameInput] = useState('');
    const[emailInput, setEmailInput] = useState('');
    const[passwordInput, setPasswordInput] = useState('');
    const[confirmPasswordInput, setConfirmPasswordInput] = useState('');

    const navigation = useNavigation();

    const height = Dimensions.get('window').height;
    const statusBarHeight = height > 640 ? 0 : 24;

    useBackHandler(() => {
        navigation.replace('Login');
        return true;
    });

    const { signUp } = useContext(AuthContext);

    function showToast(text) {
        ToastAndroid.showWithGravityAndOffset(
            text,
            ToastAndroid.SHORT, 
            ToastAndroid.TOP,
            0, 75);
    }

    async function handleSignUp(){
        if(nameInput === '' || passwordInput === '' || confirmPasswordInput === '' || emailInput === ''){
            showToast("Don't leave any fields empty")

        } else if(confirmPasswordInput !== passwordInput){
            showToast("Passwords doesn't match")

        } else {
            const userCreated = await signUp(nameInput, emailInput, passwordInput);
            if(userCreated){
                showToast('You are now registered! Sign in please.');
                navigation.replace('Login');
            } else {
                showToast('An error ocurred during register');
            }
        }
        
    }

    return(
        <KeyboardAvoidingWrapper>
        <Container height={height - statusBarHeight}>
        <RegisterContainer>
            <DropAnimation>
                <TopContainer>
                    <Logo />
                    <Title>Notes.io</Title>
                </TopContainer>
            </DropAnimation>     
            <TextInput 
            placeholder='Name...'
            onChangeText={(nameInput) => setNameInput(nameInput)}/>
            
            <TextInput 
            placeholder='Email...'
            onChangeText={(emailInput) => setEmailInput(emailInput)}/> 
            
            <TextInput 
            placeholder='Password...'
            password={true}
            onChangeText={(passwordInput) => setPasswordInput(passwordInput)}/>

            <TextInput 
            placeholder='Confirm password...' 
            password={true}
            onChangeText={(confirmPasswordInput) => setConfirmPasswordInput(confirmPasswordInput)}/>

            <Button 
            TextButton='Register'
            onPress={handleSignUp}/>
            <DropAnimation isDelay={{delay: 200}}>
            <SignUpButton activeOpacity={1}>
                <Text>Already have an account? </Text>
                <SignUpButton 
                onPress={() => {
                    navigation.replace('Login');
                }}
                activeOpacity={0.5}>
                    <Text isPurple>Sign In</Text>
                </SignUpButton>
            </SignUpButton>
            </DropAnimation>
        </RegisterContainer>
        </Container>
        </KeyboardAvoidingWrapper>
    );
}

export default Register;