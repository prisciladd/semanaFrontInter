import styled from 'styled-components';

export const Wrapper = styled.main` /* Wrapper = nome do componente sempre começa com letra maiúscula, div que pega página toda */

    width: 100%;
    height:100vh;
    align-items: center;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Background = styled.div<{image: any}>` /* styled. tem todas as tags HTML. Recebe uma imagem de qlq tipo */

    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 50vh; /* 50vh = metade da pagina */
    background-image: url (${({image}) => image});
    background-size: contain;
    z-index: 1; /* ficar atrás de todos componentes */
`

export const InputContainer = styled.div`
    margin-top: 67px;
    width: 90%;
    flex: 1;
`

export const ButtonContainer = styled.div`
    margin-top: 20px;
    width: 90%;
    
    display: flex;
    align-items: center;
    flex-direction: column;

    p {         /* todo filho de button que tiver p */
        font-family: Roboto, sans-serif;
        font-size: 0.75rem;         /* rem = medida relativa para responsividade */
        font-weight: 400;
        color: ${({theme}) => theme.colors.secondary};

        a{      /* a dentro de p */
            font-family: Roboto, sans-serif;
            font-size: 1rem;
            font-weight: 700;
        }
    }
`