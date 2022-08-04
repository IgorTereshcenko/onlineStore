import './shoppingcard.scss';
import deleteImg from '../../resurses/delete.svg';
import { Link } from 'react-router-dom';

const Shoppingcard = ({data,onDeleteShoppingCard,onIncreaseCount,onDecreaseCount,total}) => {

const shoppincardList = data.map(item => {
    return (
        <div className="shoppingcard__wrapper"
             key={item.id}>
            <div className="shoppingcard__img">
                <img src={item.img} alt="" />
            </div>
            <div className="shoppingcard__descr">
                <div className="shoppingcard__name">{item.descr}</div>
                <div className="shoppingcard__color">{'Цвет:' + item.color}</div>
                <div className="shoppingcard__size">{'Размер:' + item.size}</div>
            <div className="shoppingcard__count">
                <button 
                    onClick={() => onIncreaseCount(item.id)} 
                    className="shoppingcard__more">+</button>
                <div className="shoppingcard__countres">{item.count}</div>
                <button 
                    onClick={() => onDecreaseCount(item.id)} 
                    className="shoppingcard__less">&ndash;</button>
            </div>
            <button 
                onClick={()  => onDeleteShoppingCard(item.id)} 
                className="shoppingcard__delete"><img src={deleteImg}  
                alt="delete" />
                <span>удалить</span></button>
            </div>
           
            <div className="shoppingcard__price">Стоимость: <span>{item.totalPrice}</span></div>
            
        </div>
    )
})

    return (
        <div className="shoppingcard">
            <div className="container">
                <div className="shoppingcard__title">Корзина</div>
                <Link to = '/' className='shoppingcard__mane'>на главную/</Link>
                <Link to = '/catalog' className='shoppingcard__catalog'>каталог</Link>
              {data.length > 0 ? shoppincardList : <h2 className='clear'>Корзина пуста</h2>}
              {<div className="shoppingcard__res">Итого: <span>{total}</span></div> }
              <Link to='/ordering' className='shoppingcard__order'>Заказать</Link>
            </div>
        </div>
    )
}

export default Shoppingcard;