import { useContext, useState } from 'react';
import { 
    View,
    TouchableWithoutFeedback
} from 'react-native';

import IconsFontAwesome from 'react-native-vector-icons/FontAwesome';

import { ThemeContext } from 'styled-components/native';

import api from '../../../services/api';
import { Card, CardTitle, CardText } from './styles';

const NotesCard = ({noteId, noteTitle, noteText, noteIsChecked}) => {

    const [noteChecked, setNoteIsChecked] = useState(noteIsChecked);

    const theme = useContext(ThemeContext);

    async function handleToggleNotes() {
        noteChecked === 1 ? setNoteIsChecked(0) : setNoteIsChecked(1);
        await api.put('/note/'+noteId);  
    }

    return(
        <Card isComplete={noteChecked}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <CardTitle isComplete={noteChecked}>{noteTitle}</CardTitle>
            <TouchableWithoutFeedback onPress={handleToggleNotes}>
                <IconsFontAwesome
                    name={noteChecked ? 'check-circle' : 'check-circle-o'}
                    size={32} 
                    color={ noteChecked ? theme.colors.gray['100'] : theme.colors.gray['100']}
                />
            </TouchableWithoutFeedback>
        </View>       
        <View>
            <CardText numberOfLines={3} isComplete={noteChecked}>
            {noteText}
        </CardText>
        </View>      
        </Card>  
    );
}

export default NotesCard;