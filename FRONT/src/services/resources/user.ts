import api from '../api';


export interface SignInData{
    email:string;
    password: string;
}

export interface SignUpData{
    firstName: string;
    lastName: string;
    email:string;
    password: string;
}
export const signIn = async (data: SignInData) => {
    return api.post ('/user/signin', data);
}

export const me = async () => { /* não precisa do parametro data pois irá pegar do token */
    return api.get ('/user/signup');
}

export const signUp = async (data: SignUpData) => {
    return api.post ('/user/signup', data);
}