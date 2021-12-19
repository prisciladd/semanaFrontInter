import {HeaderContainer, HeaderWrapper, UserInfo} from './styles';
import {useAuth} from '../../hooks/useAuth';
import logoInter from '../../assets/images/logo.png';
import {useNavigate} from 'react-router-dom';
import UserCircle from '../UserCircle';

const Header = () => {
    const navigate = useNavigate ();
    const {user} = useAuth();   /* pegando dados do usuário do useAuth */

    const initials = user.firstName.substr(0,1)+user.lastName.substr(0,1)

    const handleLogoff =() =>{
        navigate('/')
    }
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="logo inter"></img>
                <UserInfo>
                    <UserCircle initials={initials}/>
                    <div>
                        <p>Olá <span className="primary-color font-bold">{user.firstName} {user.lastName} </span></p>
                        <strong>{user.accountNumber}-{user.accountDigit}</strong> <br/>
                        <a href="#" onClick={handleLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )

}

export default Header