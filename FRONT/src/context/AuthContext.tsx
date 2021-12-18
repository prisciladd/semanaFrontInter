import {createContext, useEffect, useState, useCallback} from 'react';
import {signIn,signUp,SignInData,SignUpData} from'../services/resources/user';

interface UserDto {
    id: string;
    firstName: string;
    lastName: string;
    accountNumber: number;
    accountDigit: number;
    wallet: number;
    email: string;

}

interface ContextData {
    user: UserDto;
    userSignIn: (userData: SignInData) => void;
    userSignUp: (userData: SignUpData) => void;
} 

export const AuthContext = createContext<ContextData>({} as ContextData)

export const AuthProvider:React.FC = ({children}) => {

    const [user, setUser] = useState<UserDto>({} as UserDto);

    const userSignIn = async (userData: SignInData) => {
        const {data} = await signIn(userData);
        localStorage.setItem('@Inter:Token', data.accessToken);
    }

    const userSignUp = async (userData: SignUpData) => {
        const {data} = await signUp(userData);
        localStorage.setItem('@Inter:Token', data.accessToken);
    }

    return(
        <AuthContext.Provider value={{user, userSignIn, userSignUp}}>
            {children}
        </AuthContext.Provider>
    )
}