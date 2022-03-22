import { StatusBar } from 'react-native';

import { Container, Image } from './styles';

const Logo = () => {
    return(
    <Container>
        <Image
        source={require('../../assets/logo.png')} 
        resizeMode='contain' 
        />
    </Container>
    );
}

export default Logo;