import {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import {Wrapper, Background, InputContainer, ButtonContainer} from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoInter from '../../assets/images/logo.png';
import background from '../../assets/images/background.jpg';
import useAuth from '../../hooks/useAuth'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {userSignIn} = useAuth();
    
    const handleToSignIn = async () =>{
        
        const data = {
            email,
            password
        }
        const response = await userSignIn(data)

        if (response.id){   /* se o response tiver id (usuario logado) navega para o dashboard */
            navigate ('dashboard');
            return;
        }
        alert ('Usuário ou senha inválida')
    }

    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px">
            <img src={logoInter} width={172} height={61} alt="Logo Inter"/>
            <InputContainer>
            <Input placeholder="EMAIL" value={email} onChange={e => setEmail(e.target.value)}/>
            <Input placeholder="SENHA" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </InputContainer>

            <ButtonContainer>
                <Button type="button" onClick={handleToSignIn}>Entrar</Button>
                <p>Já tem uma conta?<Link to="/">Entre Já</Link></p> {/* usar tag link do react router dom em vez de <a> pois não recarrega a página, somente muda para a outra rota, transição mais suave */}
            </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;