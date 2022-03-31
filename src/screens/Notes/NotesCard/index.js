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
        const { data } = await api.put('/note/'+noteId);
        noteChecked === 1 ? 0 : 1;
    }

    return(
        <Card isComplete={noteIsChecked}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <CardTitle isComplete={noteIsChecked}>{noteTitle}</CardTitle>
            <TouchableWithoutFeedback onPress={handleToggleNotes}>
                <IconsFontAwesome
                    name={noteIsChecked ? 'check-circle' : 'check-circle-o'}
                    size={32} 
                    color={ noteIsChecked ? theme.colors.gray['100'] : theme.colors.gray['100']}
                />
            </TouchableWithoutFeedback>
        </View>       
        <View>
            <CardText numberOfLines={3} isComplete={noteIsChecked}>
            {noteText}
        </CardText>
        </View>      
        </Card>  
    );
}

export default NotesCard;