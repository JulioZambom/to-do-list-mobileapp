import { createStackNavigator } from "@react-navigation/stack";

import Notes from '../screens/Notes';

const AppStack = createStackNavigator();

const AppRoutes = () => {
    return(
    <AppStack.Navigator
    screenOptions={{
        headerShown: false,
        animationEnabled: false
    }}>
        <AppStack.Screen name="Home" component={Notes}/>
    </AppStack.Navigator>
    );
}

export default AppRoutes;