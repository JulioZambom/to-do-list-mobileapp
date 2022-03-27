import { Container, Input } from './styles';

import DropAnimation from '../DropAnimation'

const TextInput = ({placeholder, password, onChangeText, value}) => {
    return(
        <DropAnimation>
        <Container>
            <Input placeholder={placeholder} placeholderTextColor='rgba(0,0,0,0.3)' secureTextEntry={password} onChangeText={onChangeText}/>
        </Container>
        </DropAnimation>
    );
}

export default TextInput;