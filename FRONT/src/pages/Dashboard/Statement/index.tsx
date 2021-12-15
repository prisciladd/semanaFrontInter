import{StatementContainer, StatementItemContainer, StatementItemImage, StatementItemInfo} from './styles'
import format from 'date-fns';
import {FiDollarSign} from 'react-icons/fi';

interface StatementItem{
    user:{
        firstName: string;
        lastName: string
    },
    value: number,
    type: 'pay' | 'received',
    updatedAt: Date
}
const StatementItem = ({user,value,type, updatedAt} : StatementItem) =>{
    return(
        <StatementItemContainer>
            <StatementItemImage type={type}>
                <FiDollarSign size={24}>

                </FiDollarSign>
            </StatementItemImage>
            <StatementItemInfo>
                <p className='primary-color'>{value.toLocaleString ('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
                <p>{type === 'pay' ? 'Pago a' : 'Recebido de'} <strong>{user.firstName}{user.lastName}</strong> </p>
                <p>{format(updatedAt, "dd/MM/yyyy 'às' HH:mm:'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )
}
const Statement = () => {
    return(
    <StatementContainer> 
        {statements.map(statment => <StatementItem {...statment}/>)}
    </StatementContainer>
    )
}

export default Statement;