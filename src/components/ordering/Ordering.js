import './ordering.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {orderingFetched} from './orderingSlice';
import { useNavigate } from "react-router-dom";
import { nanoid } from 'nanoid'

const Ordering = () => {

    const dispatch = useDispatch();

    const [name,setName] = useState('');
    const [tele, setTele] = useState('');
    const [index, setIndex] = useState('');
    const [adress, setAdress] = useState('');
    const [email, setEmail] = useState('');
    const [delivery, setDelivery] = useState('');
    const [payment, setPayment] = useState('');
    const [comment, setComment] = useState('');
    
    let navigate = useNavigate();

    const onSubmiteDate = (e) => {
    e.preventDefault();                       
    navigate("/confirmation");

    const newOrderingDate = {
        id: nanoid(),
        name,
        tele,
        index,
        adress,
        email,
        delivery,
        payment,
        comment
    }

    dispatch(orderingFetched(newOrderingDate));

    setName('');
    setTele('');
    setIndex('');
    setAdress('');
    setEmail('');
    setComment('')
    }

    return (
    <div className="ordering">
        <div className="container">
        <Link to = '/' className='ordering__mane'>на главную/</Link>
        <Link to = '/catalog' className='ordering__catalog'>каталог</Link>

        <h2 className="ordering__title">Оформление заказа</h2>
        <form  className="ordering__form" onSubmit={onSubmiteDate}>
            <h4 className='ordering__titleDate'>Ваши данные</h4>
            <div className="ordering__inputsDate">
                <div className="ordering__inputsOne">
                    <input 
                        type="text" 
                        className="ordering__date"
                        required
                        placeholder='ФИО'
                        value={name}
                        onChange = {(e) => setName(e.target.value)} />
                    <input 
                        type="number" 
                        className="ordering__date"
                        required
                        placeholder='Контактный телефон'
                        value={tele}
                        onChange = {(e) => setTele(e.target.value)} />
                    <input 
                        type="number" 
                        className="ordering__date"
                        required
                        placeholder='Индекс'
                        value={index}
                        onChange = {(e) => setIndex(e.target.value)} />
                </div>    
                <div className="ordering__inputsTwo">
                    <input 
                        type="text" 
                        className="ordering__date"
                        required
                        placeholder='Ваш адрес'
                        value={adress}
                        onChange = {(e) => setAdress(e.target.value)} />
                    <input 
                        type="email" 
                        className="ordering__date"
                        required
                        placeholder='Электронная почта'
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)} />
                    <textarea 
                        name="text" 
                        className="ordering__textarea"
                        placeholder='Комментарий'
                        value={comment}
                        onChange = {(e) => setComment(e.target.value)}>    
                    </textarea>
                </div>
            </div>
            
            <h4 className="ordering__titleDelivery">Выберите способ доставки</h4>
            <div className="ordering__checkboxDelivery">
            <input 
                    type="radio"
                    id='titleDelivery'
                    name='titleDelivery' 
                    className="ordering__delivery"
                    value='Белпочтой'
                    onChange = {(e) => setDelivery(e.target.value)}
                    />
                <label htmlFor='titleDelivery'>Белпочта</label>
                <input 
                    type="radio"
                    id='titleDelivery2' 
                    className="ordering__delivery"
                    name='titleDelivery'
                    value='Европочтой'
                    onChange = {(e) => setDelivery(e.target.value)}
                    />
                <label htmlFor='titleDelivery2'>Европочта</label>
                <input 
                    type="radio"
                    id='titleDelivery3' 
                    className="ordering__delivery"
                    name='titleDelivery'
                    value='Европочтой + курьер'
                    onChange = {(e) => setDelivery(e.target.value)}
                    />
                <label htmlFor='titleDelivery3'>Европочта + курьер</label>
                <input 
                    type="radio"
                    id='titleDelivery4' 
                    className="ordering__delivery"
                    name='titleDelivery'
                    value='Курьером'
                    onChange = {(e) => setDelivery(e.target.value)}
                    />
                <label htmlFor='titleDelivery4'>Курьер</label>
        </div>
        
            <h4 className="ordering__titleMoney">Выберите способ оплаты</h4>
            <div className="ordering__checkboxMoney">
                <input 
                    type="radio"
                    id='titleMoney'
                    name='titleMoney' 
                    className="ordering__money"
                    value='Картой'
                    onChange = {(e) => setPayment(e.target.value)}
                    />
                <label htmlFor='titleMoney'>Банковская карта</label>
                <input 
                    type="radio"
                    id='titleMoney2'
                    name='titleMoney'  
                    className="ordering__money"
                    value='Наложенным платежем'
                    onChange = {(e) => setPayment(e.target.value)}
                    />
                <label htmlFor='titleMoney2'>Наложенный платёж</label>
                <input
                    type="radio"
                    id='titleMoney3' 
                    name='titleMoney' 
                    className="ordering__money"
                    value='ЕРИП'
                    onChange = {(e) => setPayment(e.target.value)}
                    />
                <label htmlFor='titleMoney3'>Оплата в ЕРИП</label>
            </div>
        <button  type="submit" className="ordering__btn">Подтвердить</button>
        </form>
        </div>
        
    </div>
    )
}

export default Ordering;