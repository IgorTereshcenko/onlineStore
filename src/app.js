import Catalog from "./components/catalog/Catalog";
import { useEffect, useCallback } from "react";
import {useHttp} from '../src/hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import { shopsFetching, shopsFetched, shopsFetchingError,shoppingcardLoading,shoppingcardDeleted, shoppingcardTotal, increaseCount, decreaseCount, choiseSize } from '../src/actions';

import MainPage from "./components/mainPage/MainPage";
import Shoppingcard from "./components/shoppingcard/Shoppingcard";

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import OnePage from "./components/onePage/onePage";
import Ordering from "./components/ordering/Ordering";
import Confirmation from "./components/confirmation/Confirmation";

const App = () => {

    const {request} = useHttp();
    const {data, shopsLoadingStatus, shoppingcard, total} = useSelector(state => state);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(shopsFetching());
        request('http://localhost:3001/data')
            .then(data => dispatch(shopsFetched(data)))
            .catch(() => dispatch(shopsFetchingError()))
    },[])

    useEffect(() => {
            dispatch(shoppingcardTotal())
    },[shoppingcard])

    const onAddShoppingCard = (item) => {
        dispatch(shoppingcardLoading(item))
        localStorage.getItem('root')    
    }

    const onDeleteShoppingCard = useCallback((id) => {   
        dispatch(shoppingcardDeleted(id))
    })

    const onIncreaseCount = useCallback((id) => {
        dispatch(increaseCount(id))
    },[shoppingcard])

    const onDecreaseCount = useCallback((id) => {
        dispatch(decreaseCount(id));
    },[shoppingcard])

    const onChoiseSize = useCallback((e) => {
        dispatch(choiseSize(e.target.value))
    },[data])
    

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element = {<MainPage/>}/>
                    <Route path="catalog" element = {<Catalog
                                          data = {data}
                                          onAddShoppingCard = {onAddShoppingCard} 
                                          onChoiseSize = {onChoiseSize}/>}/>
                    <Route path="catalog/:id" element = {<OnePage
                                              data = {data}
                                              onAddShoppingCard = {onAddShoppingCard}
                                              onChoiseSize = {onChoiseSize}/>}/>
                    <Route path="/shoppingcard" element = {<Shoppingcard
                                                data = {shoppingcard}
                                                onDeleteShoppingCard = {onDeleteShoppingCard}
                                                total = {total}
                                                onIncreaseCount = {onIncreaseCount}
                                                onDecreaseCount = {onDecreaseCount}/>}/>
                    <Route path="/ordering" element = {<Ordering/>}/>
                    <Route path="/confirmation" element = {<Confirmation data = {shoppingcard}/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App;