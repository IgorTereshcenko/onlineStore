import './onePage.scss';
import { Link, useParams } from 'react-router-dom';

const OnePage = ({data,onAddShoppingCard,onChoiseSize}) => {

    const id = useParams();

    const page = data.filter(item => item.id === id.id).map(item => {
        return (
            <div className="onePage__wrapper">
                <div className="onePage__image">
                    <div className="onePage__title">{item.descr}</div>
                    <img src={item.img} alt={item.img} className="onePage__img" />
                </div>
                <div className="onePage__descr">
                    <div className="onePage__price">{item.price + ' ' + 'руб'}</div>
                    <div className="onePage__size">Размер</div>
                    <div className="onePage__sizeBtns">
                        <button onClick={onChoiseSize} 
                                className='onePage__sizeBtn'
                                value='S'>S</button>
                        <button onClick={onChoiseSize} 
                                className='onePage__sizeBtn'
                                value='M'>M</button>
                        <button onClick={onChoiseSize} 
                                className='onePage__sizeBtn'
                                value='L'>L</button>
                        <button onClick={onChoiseSize} 
                                className='onePage__sizeBtn'
                                value='XL'>XL</button>
                    </div>
                    <button 
                        onClick={() => onAddShoppingCard(item)} 
                        className="onePage__shoppingcardBtn">В корзину</button>
                    <div className="onePage__about">Описание</div>
                    <div className="onePage__more">{item.more}</div>
                </div>
            </div>
        )
    })

    return (
        <div className="onePage">
            <div className="container">
                <Link to='/shoppingcard' className="onePage__shoppingcard">перейти в корзину/</Link>
                <Link to = '/' className='onePage__mane'>на главную/</Link>
                <Link to = '/catalog' className='onePage__catalog'>каталог</Link>
                {page}
            </div>
        </div>
    )
}

export default OnePage;