import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    // Component used for treat keyboard issue overlaying other elements
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#EFC3E9" }}>
      <ScrollView keyboardShouldPersistTaps={"always"} overScrollMode="never">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
