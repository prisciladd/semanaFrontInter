import {useEffect, useState} from 'react';
import{StatementContainer, StatementItemContainer, StatementItemImage, StatementItemInfo} from './styles'
import format from 'date-fns';
import {FiDollarSign} from 'react-icons/fi';
import {transactions} from '../../../services/resources/pix';

interface StatementItem{
    user:{
        firstname: string;
        lastName: string
    },
    value: number,
    type: 'paid' | 'received',
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
                <p>{type === 'paid' ? 'Pago a' : 'Recebido de'} <strong>{user.firstname}{user.lastName}</strong> </p>
                <p>{format(new Date (updatedAt), "dd/MM/yyyy 'às' HH:mm:'h'")}</p>
            </StatementItemInfo>
        </StatementItemContainer>
    )
}
const Statement = () => {
    
    const [statements, setStatements] = useState<StatementItem[]>([]);
    
    const getAllTransactions = async() => {
        const {data}= await transactions();
        setStatements(data.transactions);
    }

    useEffect(() => {
        getAllTransactions();
    }, [])

    return(
    <StatementContainer> 
        {statements.length > 0 && statements.map(statment => <StatementItem {...statment}/>)}
    </StatementContainer>
    )
}

export default Statement;