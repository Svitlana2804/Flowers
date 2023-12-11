import React, { useEffect,useState } from 'react';
import './Favorite.scss'
import { TbBasketDown } from "react-icons/tb";
import Button from '../../component/Button/Button';
import {  useSelector,useDispatch } from 'react-redux';
import { selectorFavorites } from '../../store/selectors';
import { actionAddToShop } from '../../store/actions';
import { actionToggleFavorire } from '../../store/actions';

const FavoritePage = () => {
  const dispatch = useDispatch()
  const favorite = useSelector(selectorFavorites)
  useEffect(() => {
    dispatch(actionToggleFavorire(favorite))

  }, []);
 
  return (
    <>
  <h2 >Сторінка з улюбленими продуктами</h2>
      <div className='favorite-page'>
        <ul  className='favorite-page_list'>
      {favorite.map((item, index) =>
      (<li key={index} className='favorite-page_item'> <img src={item.imgIcon} style={{ width: '120px', height: '140px' }} />
          {item.title}
        <Button type='button' onClick={()=> dispatch(actionAddToShop(item))} style={{ border: 'none', background: 'none' }}  ><TbBasketDown style={{ width: '35px', height: '45px', fill: ' #19a672' }} />
        </Button>
        </li>
        ))}
       </ul>
      </div>
    </>
  )
}


export default FavoritePage






