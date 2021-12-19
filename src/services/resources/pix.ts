import api from '../api';

/* não necessita de interface pois é somente 1 campo */

export const request = (value:number) => {
    return api.post ('/pix/request', {value})
}

export const pay = (key: string) => {
    return api.post ('/pix/pay/${key}')    
}

export const transactions = () =>{
    return api.get ('/pix/transactions')    
}