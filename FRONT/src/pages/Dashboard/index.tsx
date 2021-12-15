import React from 'react'
import {DashboardBackground, BodyContainer, InlineContainer, InlineTitle} from './styles'
import Header from '../../components/Header';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Statement from './Statement';


const Dashboard = () => {
    const wallet = 5000;
    return (
        <DashboardBackground>
            <BodyContainer>
                <div>
                    <Card noShadow width="90%/">
                        <InlineTitle>
                            <h2 className= "h2">Saldo Atual</h2>

                        </InlineTitle>
                        <InlineContainer>
                        <h3 className='wallet'>
                                {wallet.toLocaleString('pt-BR', {style: 'currency', currency : 'BRL'})
                                }
                        </h3>
                        </InlineContainer>
                    </Card>

                    <Card noShadow width="90%/">
                        <InlineTitle>
                            <h2 className= "h2">Receber PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex:1}} placeholder='Valor'></Input>
                            <Button>Gerar Código</Button>
                        </InlineContainer>

                        <p className='primary-color'>Pix copia e cola</p>                        
                        <p className='primary-color'>ldkfj\~pwlj~pskfslkdcj</p>
                    </Card>

                    
                    <Card noShadow width="90%/">
                        <InlineTitle>
                            <h2 className= "h2">Pagar PIX</h2>
                        </InlineTitle>
                        <InlineContainer>
                            <Input style={{flex:1}} placeholder='Insira a chave'></Input>
                            <Button>Pagar PIX</Button>
                        </InlineContainer>

                        <p className='primary-color'>Pix copia e cola</p>
                        <p className='primary-color'>ldkfj\~pwlj~pskfslkdcj</p>
                    </Card>
                </div>

                <div>
                    <Card noShadow width="90%/">
                        <InlineTitle>
                            <h2 className= "h2">Extrato da Conta</h2>
                        </InlineTitle>                    
                        <Statement/>
                    </Card>
                </div>
            </BodyContainer>
        </DashboardBackground>
    )
}

export default Dashboard 