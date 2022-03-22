import { useContext, useState } from 'react';
import { 
    View,
    TouchableWithoutFeedback
} from 'react-native';

import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';

import { ThemeContext } from 'styled-components/native';
import AuthContext from '../../contexts/auth';

import{ 
    Container,
    TopContainer, 
    UserTitle,
    Title,
    Button, 
    TextButton,
    CardContainer,
    Card,
    CardTitle,
    CardText
} from  './styles';

const Notes = () => {
    const [isComplete, setIsComplete] = useState(false);

    const theme = useContext(ThemeContext);
    const { logOut } = useContext(AuthContext);

    function handleCheckCard(){
        isComplete ? setIsComplete(false) : setIsComplete(true);
    };

    function handleLogOut(){
        logOut();
    };

    return(
    <Container>
        <TopContainer>
            <UserTitle>Julio Zambom</UserTitle>
            <IconsFontAwesome name="gear" size={32} color={theme.colors.gray['400']}/>
        </TopContainer>
        <TopContainer>
            <Title>Task notes</Title>
            <Button onPress={handleLogOut}><TextButton>Add task</TextButton></Button>
        </TopContainer>

        <CardContainer>
            <Card isComplete={isComplete}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <CardTitle isComplete={isComplete}>Default task</CardTitle>
              <TouchableWithoutFeedback onPress={handleCheckCard}>
                 <IconsFontAwesome
                 name={isComplete ? 'check-circle' : 'check-circle-o'}
                 size={32} 
                 color={ isComplete ? theme.colors.gray['100'] : theme.colors.gray['100']}/>
              </TouchableWithoutFeedback>
            </View>       
            <View>
                <CardText numberOfLines={3} isComplete={isComplete}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </CardText>
            </View>      
            </Card>  
        </CardContainer> 
    </Container>
    );
}

export default Notes;