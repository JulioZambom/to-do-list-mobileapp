import { Container, Input } from './styles';

import DropAnimation from '../DropAnimation'

const TextInput = ({placeholder, password, onChangeText, value}) => {
    return(
        <DropAnimation>
        <Container>
            <Input placeholder={placeholder} secureTextEntry={password} value={value} onChangeText={onChangeText}/>
        </Container>
        </DropAnimation>
    );
}

export default TextInput;