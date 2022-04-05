import { useContext, useEffect, useState } from 'react';
import { Modal, TouchableWithoutFeedback, ToastAndroid } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';

import NotesCard from './NotesCard';

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
    FormContainer,
    CloseModalIcon,
    Input,
    DescriptionInput,
    ButtonSubmit,
    ButtonSubmitText
} from  './styles';

const Notes = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [titleInput, setTitleInput] = useState('');
    const [descriptionInput, setDescriptionInput] = useState('');
    const [notes, setNotes] = useState('');
    const [username, setUsername] = useState('');

    const theme = useContext(ThemeContext);
    const { logOut, userId, user } = useContext(AuthContext);

    useEffect(() => {
        (async() => {
            setUsername(user);
            const { data } = await api.get(`/notes/${userId}`);
            setNotes(data);
            console.log(data);
        })()
        },[userId]);

    function showToast(text) {
        ToastAndroid.showWithGravityAndOffset(
            text,
            ToastAndroid.SHORT, 
            ToastAndroid.TOP,
            0, 75);
    }

    async function handleCreateNote() {
        const date = new Date();
        let month = date.getMonth() + 1; 
        let day = date.getDate();
        const year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if(month<=9){
            month = '0' + month;
        }
        if(day<=9){
            day = '0' + day;
        }
        if(hours<=9){
            hours = '0' + hours;
        }
        if(minutes<=9){
            minutes = '0' + minutes;
        }
        if(seconds<=9){
            seconds = '0' + seconds;
        }
        const fullDate = `${month}/${day}/${year} - ${hours}:${minutes}:${seconds}`;
        
        if(titleInput && descriptionInput){
            setIsModalVisible(false);
            showToast('Note created!');
            const {data} = await api.post('/notes', {
                title: titleInput,
                text: descriptionInput,
                is_checked: false,
                date: fullDate,
                user_id: userId
            });
            setNotes([...notes, data.noteCreated]);
        } else {
            showToast("Don't leave any fields empty");
        }
    }

    function handleToggleModal() {
        isModalVisible === true ? setIsModalVisible(false) : setIsModalVisible(true);
    }
    function handleLogOut(){
        logOut();
    };

    return(
    <Container>
        <TopContainer>
            <UserTitle>{username}</UserTitle>
            <IconsFontAwesome onPress={handleLogOut} name="gear" size={32} color={theme.colors.gray['400']}/>
        </TopContainer>
        <TopContainer>
            <Title>Task notes</Title>
            <Button onPress={handleToggleModal}><TextButton>Add task</TextButton></Button>
        </TopContainer>

        <CardContainer>
            {notes.length > 0 ? (
                notes.map((note) => (
                    <NotesCard key={note.id} noteId={note.id} noteIsChecked={note.is_checked} noteText={note.text} noteTitle={note.title}/>
                ))
            ) : (
                <UserTitle>You don't have any notes yet</UserTitle>
            )}
        </CardContainer> 

        <Modal visible={isModalVisible} transparent={true} animationType='slide'>
        <ModalContainer>
            <AddNoteContainer>   
                <Title isLight>New task</Title>
                <CloseModalIcon onPress={handleToggleModal}>X</CloseModalIcon>
                <FormContainer>
                <Input 
                placeholder='Title...'
                onChangeText={(titleInput) => setTitleInput(titleInput)}/>
                <DescriptionInput
                multiline={true} 
                placeholder='Description...'
                onChangeText={(descriptionInput) => setDescriptionInput(descriptionInput)}/>
                <ButtonSubmit onPress={handleCreateNote}>
                    <ButtonSubmitText>
                        Add note
                    </ButtonSubmitText>
                </ButtonSubmit>
            </FormContainer>
            </AddNoteContainer>
        </ModalContainer>
        </Modal>
    </Container>
    );
}

export default Notes;