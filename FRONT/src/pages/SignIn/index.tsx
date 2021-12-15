import {Wrapper, Background, InputContainer, ButtonContainer} from './styles';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoInter from '../../assets/images/logo.PNG';
import background from '../../assets/images/background.JPG';
import {Link, useNavigate} from 'react-router-dom';

const SignIn = () => {

    const navigate = useNavigate();

    const handleToSignIn = () =>{
        navigate ('dashboard');
    }

    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px">
            <img src={logoInter} width={172} height={61} alt="Logo Inter"/>
            <InputContainer>
            <Input placeholder="EMAIL"/>
            <Input placeholder="SENHA" type="password"/>
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