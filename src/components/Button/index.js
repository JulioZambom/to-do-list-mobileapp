import { ButtonSubmit, ButtonSubmitText } from './styles';

import DropAnimation from '../DropAnimation';

const Button = ({TextButton, onPress}) => {
    return(
        <DropAnimation>
        <ButtonSubmit onPress={onPress} activeOpacity={0.7}>
            <ButtonSubmitText>{TextButton}</ButtonSubmitText>
        </ButtonSubmit>
        </DropAnimation>      
    );
}

export default Button;