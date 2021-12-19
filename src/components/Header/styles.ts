import styled from 'styled-components';

export const HeaderContainer = styled.head`
    width:100%;
    height: 90px;

    background-color: ${({theme}) => theme.colors.background};

    display:flex;
    justify-content: center;
    align-items: center;

`

export const HeaderWrapper = styled.div` /* wrapper é uma caixa/div dentro do header para os elementos não ficarem grudados nas bordas */
    width:80%;
    height: 90px;

    background-color: ${({theme}) => theme.colors.background};

    display:flex;
    justify-content: space-between;
    align-items: center;

`


export const UserInfo = styled.div`

    display:flex;
    justify-content: center;
    align-items: center;

`