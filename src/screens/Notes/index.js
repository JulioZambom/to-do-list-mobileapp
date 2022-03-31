import { useContext, useEffect, useState } from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';

import SaveButton from '../../components/Button';
import NotesCard from './NotesCard';
import { Input } from './styles';

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
    ModalContainer,
    AddNoteContainer,
    CloseModalIcon
} from  './styles';

const Notes = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [notes, setNotes] = useState([]);
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState();

    const theme = useContext(ThemeContext);
    const { logOut } = useContext(AuthContext);

    useEffect(() => {
        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('@Auth:user');
            const storagedUserId = await AsyncStorage.getItem('@Auth:userId');
            setUser(JSON.parse(storagedUser));
            setUserId(JSON.parse(storagedUserId));
        }

        async function loadNotes() {
            const { data } = await api.get('/notes/'+userId);
            setNotes(data);
        }
        loadNotes();
        loadStoragedData();
    })

    function handleToggleModal() {
        isModalVisible === true ? setIsModalVisible(false) : setIsModalVisible(true);
    }
    function handleLogOut(){
        logOut();
    };

    return(
    <Container>
        <TopContainer>
            <UserTitle>{user}</UserTitle>
            <IconsFontAwesome onPress={handleLogOut} name="gear" size={32} color={theme.colors.gray['400']}/>
        </TopContainer>
        <TopContainer>
            <Title>Task notes</Title>
            <Button onPress={handleToggleModal}><TextButton>Add task</TextButton></Button>
        </TopContainer>

        <CardContainer>
        {notes.map((notes) => (
                <NotesCard key={notes.id} noteId={notes.id} noteIsChecked={notes.is_checked} noteText={notes.text} noteTitle={notes.title}/>
            ))}
        </CardContainer> 

        <Modal visible={isModalVisible} transparent={true} animationType='slide'>
        <ModalContainer>
            <AddNoteContainer>   
                <Title isLight>New task</Title>
                <CloseModalIcon onPress={handleToggleModal}>X</CloseModalIcon>
                <Input placeholder='Title...'/>
                <Input isDescription placeholder='Description...' />
                <SaveButton TextButton='Add note'/>
            </AddNoteContainer>
        </ModalContainer>
        </Modal>
    </Container>
    );
}

export default Notes;