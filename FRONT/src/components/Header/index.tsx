import {HeaderContainer, HeaderWrapper, UserInfo} from './styles';

import logoInter from '../../assets/images/logo.PNG';
import {useNavigate} from 'react-router-dom';
import UserCircle from '../UserCircle';

const Header = () => {
    const navigate = useNavigate ();

    const handleLogoff =() =>{
        navigate('/')
    }
    return(
        <HeaderContainer>
            <HeaderWrapper>
                <img src={logoInter} width={172} height={61} alt="logo inter"></img>
                <UserInfo>
                    <UserCircle initials='PD'/>
                    <div>
                        <p>Olá <span className="primary-color font-bold">Pablo</span></p>
                        <strong>0009782</strong> <br/>
                        <a href="#" onClick={handleLogoff}>Sair</a>
                    </div>
                </UserInfo>
            </HeaderWrapper>
        </HeaderContainer>
    )

}

export default Header