import { ButtonContainer } from "./style";
import { ButtonHTMLAttributes} from 'react';

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return(
        <ButtonContainer {...props}>
            {props.children}
        </ButtonContainer>
    )           
}

export default Button;