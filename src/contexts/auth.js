import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';
import { NavigationContainer } from '@react-navigation/native';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadStoragedData() {
            const storagedUser = await AsyncStorage.getItem('@Auth:user');
            const storagedToken = await AsyncStorage.getItem('@Auth:token');

            if (storagedUser && storagedToken) {
              setUser(JSON.parse(storagedUser));
            }
        }

        loadStoragedData();
    }, []);

    async function signIn() {
        const response = await api.post('/users');
        console.log(response.data);
    };

    async function signUp(name, email, password){
        const response = await api.post('/users', {name, email, password});
        if(response.data.error){
            return false;
        } else {
            return true;
        }
    }

    function logOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    };

    return(
    <AuthContext.Provider 
    value={{signed: user != null ? true : false,
    user: user,
    signIn,
    signUp,
    logOut}}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;