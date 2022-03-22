import {KeyboardAvoidingView,
        ScrollView, 
        TouchableWithoutFeedback, 
        Keyboard 
} from 'react-native';

const KeyboardAvoidingWrapper = ({children}) => {

    return(
        // Component used for treat keyboard issue overlaying other elements
        <KeyboardAvoidingView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                {children}
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default KeyboardAvoidingWrapper;