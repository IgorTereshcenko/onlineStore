import './catalog.scss';
import { useSelector } from "react-redux";
import Spinner from '../spinner/Spinner';
import { useState } from 'react';

import shoppingcardImg from '../../resurses/shoppingcart.svg';
import { Link } from 'react-router-dom';
import Slider from 'react-rangeslider'


const Catalog = ({data,onChoiseSize,onAddShoppingCard}) => {

    const shopsLoadingStatus = useSelector(state => state.data.shopsLoadingStatus);

    const [term, setTerm] = useState('');
    const [volume, setVolume] = useState(0);
    
    const handleOnChange = (value) => {
        setVolume(value);
    }

    const onUpdateSearch = (e) => {
        setTerm(e.target.value);
    }

    const searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.descr.indexOf(term) > -1
        })
    }

    const searchPrice = (items, volume) => {
        if (volume === 0) {
            return items;
        }
        if (volume < 1000) {
            return items.filter(item => item.price < 1000);
        }
        if (volume < 2000) {
            return items.filter(item => item.price < 2000);
        }
        if (volume < 3000) {
            return items.filter(item => item.price < 3000);
        }
        if (volume <= 4000) {
            return items.filter(item => item.price <= 4000);
        } 
    }

    if (shopsLoadingStatus === 'loading') {
        return <Spinner/>
    } else if (shopsLoadingStatus === 'error') {
        return <h5>Ошибка загрузки</h5>
    }

    const visibleData = searchPrice(searchEmp(data, term),volume);
   
    const catalogList = visibleData.map(item => {
        return (
            <div className="catalog__item"
                 key={item.id}>
                <div className="catalog__img">
                    <img src={item.img} alt={item.img} />
                </div>
                <div className="catalog__price">{item.price + ' ' + 'руб'}</div>
                <div className="catalog__descr">{item.descr}</div>
                <div className="catalog__sizeBtns">
                        <button onClick={onChoiseSize} className='catalog__sizeBtn'
                                value='S'>S</button>
                        <button onClick={onChoiseSize} className='catalog__sizeBtn'
                                value='M'>M</button>
                        <button onClick={onChoiseSize} className='catalog__sizeBtn'
                                value='L'>L</button>
                        <button onClick={onChoiseSize} className='catalog__sizeBtn'
                                value='XL'>XL</button>
                    </div>
                <button onClick={() => onAddShoppingCard(item)} className="catalog__shoppingcard">
                    <img src={shoppingcardImg} alt="shoppingcard" />
                </button>
                <Link to={`${item.id}`} className="catalog__more">Подробнее</Link>    
            </div>
        )
    })
    
    return (
        <div className="catalog">
            <div className="container">
                <h2 className="catalog__title">Каталог</h2>
                <Link to="/shoppingcard" className="catalog__shoppingcardLink">в корзину/</Link>
                <Link to = '/' className='catalog__mane'>на главную/</Link>
                <input
                    className='catalog__input' 
                    type="text" 
                    placeholder='Поиск'
                    value={term}
                    onChange = {onUpdateSearch} />
                    <h2 className="catalog__priceBR">Цена, б.р</h2>
                    <Slider
                        value={volume}
                        min={0}
                        max={4000}
                        orientation="horizontal"
                        onChange={handleOnChange}
                        />
                <div className="catalog__wrapper">
                    {catalogList}
                </div>
            </div>
        </div>
    )
}

export default Catalog;