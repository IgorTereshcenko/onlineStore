import Catalog from "./components/catalog/Catalog";
import { useEffect, useCallback } from "react";
import {useHttp} from '../src/hooks/http.hook';
import { useDispatch, useSelector } from 'react-redux';
import {shopsFetching,shopsFetched,shopsFetchingError,shopsChoiseSize} from './components/catalog/catalogSlice';
import {shoppingcardLoading,shoppingcardDeleted,shoppingcardTotal,shoppingcardIncreaseCount,shoppingcardDecreaseCount} from './components/shoppingcard/shoppingcardSlice';


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

    const data = useSelector(state => state.data.data);
    const {shoppingcard,total} = useSelector(state => state.shoppingcard);
  
    const dispatch = useDispatch();
    const {request} = useHttp();
    
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
        dispatch(shoppingcardIncreaseCount(id))
    },[shoppingcard])

    const onDecreaseCount = useCallback((id) => {
        dispatch(shoppingcardDecreaseCount(id));
    },[shoppingcard])

    const onChoiseSize = useCallback((e) => {
        dispatch(shopsChoiseSize(e.target.value))
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