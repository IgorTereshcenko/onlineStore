import './confirmation.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {useHttp} from '../../hooks/http.hook';


const Confirmation = () => {

    const {ordering,shoppingcard} = useSelector(state => state);
    const {request} = useHttp();
    const [accept, setAccept] = useState(false);

    const onAcceptDate = () => {
        request('http://localhost:3001/ordering', 'POST', JSON.stringify(ordering))
            .then(console.log(`отправлено`))
        request('http://localhost:3001/purchased', 'POST', JSON.stringify(shoppingcard))
        // данные улетают на "бэк" в объект purchased
            .then(console.log('отправлено'))
        
        localStorage.clear();

        setAccept(accept => !accept)
    }

    return (
        <div className="confirmation">
            <div className="confirmation__wrapper">
            {accept ? <PopUp/> : <View ordering={ordering} onAcceptDate = {onAcceptDate}/>}    
                <Link className='confirmation__back' to='/ordering'>Х</Link> 
            </div>
        </div>
    )
}

const View = ({ordering, onAcceptDate}) => {

    const {name,payment,delivery,adress,tele,index,email,comment} = ordering;

    return (
        <>
            <div className="confirmation__title">Подтверждение заказа</div>
            <div className="confirmation__data">ФИО: <span>{name}</span></div>
            <div className="confirmation__data">Оплата: <span>{payment}</span></div>
            <div className="confirmation__data">Доставка: <span>{delivery}</span></div>
            <div className="confirmation__data">Адрес: <span>{adress}</span></div>
            <div className="confirmation__data">Телефон: <span>{tele}</span></div>
            <div className="confirmation__data">Индекс: <span>{index}</span></div>
            <div className="confirmation__data">Email: <span>{email}</span></div>
            <div className="confirmation__data">Комментарий: <span>{comment}</span></div>

            <button onClick={onAcceptDate} className="confirmation__accept">Подтвердить</button>
        </>
    )
}

const PopUp = () => {
    return (
        <div className="popUp">
            <div className="popUp__wrapper">
                <div className="popUp__title">Ваша заявка обрабатывается</div>
                <div className="popUp__descr">Наш специалист с Вами свяжется в ближайшее время</div>
            </div>
        </div>
    ) 
}

export default Confirmation;