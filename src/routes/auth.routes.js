import { createStackNavigator } from "@react-navigation/stack";

import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator
    screenOptions={{
        headerShown: false,
        animationEnabled: false,
    }}
    >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
);

export default AuthRoutes;