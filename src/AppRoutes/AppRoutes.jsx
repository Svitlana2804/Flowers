
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react'
// import './App.css'
import Layout from "../Layout/Layout"
import FlowerShop from '../component/FlowerShop/FlowerShop'
import FavoritePage from '../pages/Favorite/Favorite'
import BasketPage from '../pages/Basket/Basket'
import NotPage from '../pages/NotPage/NotPage'
import { useDispatch, useSelector } from "react-redux"
// import { selectorFavorites, selectorShop } from "../store/selectors"
import { actionAddToShop, actionToggleFavorire } from "../store/actions"
// import { actionBasket } from "../store/actions"
import { actionHandleFavorite } from "../store/actions"
import { selectorShop } from "../store/selectors"

const shopDataFromLocalStorage = localStorage.getItem('shopData');
console.log('shopDataFromLocalStorage:', shopDataFromLocalStorage);

const inizializationShop = JSON.parse(shopDataFromLocalStorage) || [];
// const inizializationShop = JSON.parse(window.localStorage.getItem('shopData')) || [];
const inizializationFavorite = JSON.parse(window.localStorage.getItem('favoriteData')) || [];
 
function AppRoutes() {
  const dispatch = useDispatch()
  const basket= useSelector(selectorShop)
  const [shop, setShop] = useState(inizializationShop)
const handleShop = (item) => {
  setShop([...shop, item])
};

  const [favorite, setFavorite] = useState(inizializationFavorite)
  const handleFavorite = (item) => {
    const favoriteCard=favorite.find((card) => {
     return item.artc === card.artc

   })
  if (favoriteCard) {
    // Видалення елемента, якщо він вже є в улюблених
    const updatedFavorites = favorite.filter((card) => item.artc !== card.artc);
    setFavorite(updatedFavorites);
  } else {
    // Додавання елемента, якщо його немає в улюблених
    setFavorite([...favorite, item]);
  }
};
  const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
    
    setIsFavorite(!isFavorite);
    };

  
  useEffect(() => {
    // dispatch(actionAddToShop())
    // dispatch(actionBasket()) 
     localStorage.setItem("shopData", JSON.stringify(basket));
  }, [basket]);

  useEffect(() => {
    dispatch(actionHandleFavorite())
dispatch(actionToggleFavorire());

  }, [favorite]);
  
 
  return (
    <>
        <Routes>
           
              <Route path="/" element={<Layout shop={shop} favorite={favorite}/>}>
                    <Route path='/' element={<FlowerShop handleShop={handleShop} handleFavorite={handleFavorite} toggleFavorite={toggleFavorite} favorite={favorite} /> } />

                    <Route path='/favorite' element={<FavoritePage />} />
                    <Route path='/basket' element={<BasketPage handleShop={handleShop} shop={shop}/>} />
                    <Route path='*' element={<NotPage />} />
              </Route>
        </Routes>
    </>
   
    
  )
  }



export default AppRoutes 