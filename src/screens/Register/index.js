import { useBackHandler } from '@react-native-community/hooks';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, RegisterContainer, TopContainer, Title, SignUpButton, Text } from  './styles';

import Logo from '../../components/Logo';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import DropAnimation from '../../components/DropAnimation';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const Register = () => {
    const navigation = useNavigation();

    const height = Dimensions.get('window').height;
    const statusBarHeight = height > 640 ? 0 : 24;

    useBackHandler(() => {
        navigation.replace('Login');
        return true;
    });

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
            placeholder='Name...'/>

            <TextInput 
            placeholder='Login...'/> 
            
            <TextInput placeholder='Password...' password={true}/>
            <TextInput placeholder='Confirm password...' password={true}/>
            <Button TextButton='Register'/>
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