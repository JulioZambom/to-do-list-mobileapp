import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../services/auth';

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
        const response = await auth.signIn();
        setUser(response.user);

        await AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user));
        await AsyncStorage.setItem('@Auth:token', response.token);
    };

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
    logOut}}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;