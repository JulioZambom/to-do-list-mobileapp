import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState();

    const navigation = useNavigation();

    console.log({userId});
    function showToast(text) {
        ToastAndroid.showWithGravityAndOffset(
            text,
            ToastAndroid.SHORT, 
            ToastAndroid.TOP,
            0, 75);
    }

    useEffect(() => {
        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('@Auth:user');
            const storagedToken = await AsyncStorage.getItem('@Auth:token');
            const storagedUserId = await AsyncStorage.getItem('@Auth:userId');

            console.log({storagedUserId});
            if (storagedUser && storagedToken && storagedUserId) {
              setUser(JSON.parse(storagedUser));
              setToken(JSON.parse(storagedToken));
              setUserId(JSON.parse(storagedUserId));
            }
        }

        loadStoragedData();
    }, []);

    async function signIn(email, password) {
        try {
            const { data } = await api.post('/auth/login', {email, password});
            console.log(data);
            setUserId(data.user.id);
            setUser(data.user.name);
            const token = data.token;
            await AsyncStorage.setItem('@Auth:user', JSON.stringify(data.user.name));
            await AsyncStorage.setItem('@Auth:userId', JSON.stringify(data.user.id));
            await AsyncStorage.setItem('@Auth:token', JSON.stringify(token));
        } catch (error) {
            showToast('Something went wrong! Try again!');
        }
    };

    async function signUp(name, email, password){
        try {
            await api.post('/users', {name, email, password});
            showToast('You are now registered, sign in please!');
            navigation.navigate('Login');
        } catch (error) {
            showToast('Something went wrong! Try again!');
        }
    }

    function logOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
            setUserId(null);
            setToken(null);
        });
    };

    return(
    <AuthContext.Provider 
    value={{signed: user != null ? true : false,
    user: user,
    userId,
    token,
    signIn,
    signUp,
    logOut}}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;