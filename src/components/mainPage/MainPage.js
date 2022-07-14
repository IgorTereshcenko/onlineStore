import './mainPage.scss';
import img1 from '../../resurses/main_img1.png';
import img2 from '../../resurses/main2.png';
import img3 from '../../resurses/Arrow.svg';
import { Link } from 'react-router-dom';
const MainPage = () => {

    return (
        <div className="main_page">
            <div className="container">
                <div className="main_page__wrapper">
                    <div className="main_page__welcome">
                        <div className="main_page__welcomeImg">
                            <img src={img1} alt="shirt" />
                        </div>
                        <h2 className="main_page__title">Добро пожаловать в Cokteil</h2>
                        <div className="main_page__descr">Экономим Ваше время! Предлагаем лучшие цены! Доставляем в кратчайшие сроки!</div>
                    </div>
                    <div className="main_page__image">
                        <div className="main_page__imageImg">
                            <img src={img2} alt="jeans" />
                        </div>
                    </div>
                </div>
                <Link to= '/catalog' className="main_page__btn">Каталог
                    <img src={img3} alt="arrow" className="btn_img" />
                </Link>
            </div>
        </div>
    )
}

export default MainPage;