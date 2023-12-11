import cx from "classnames"
import PropTypes from 'prop-types'
import ModalAddTo from "../ModalAddTo/ModalAddTo"
import { useState,useEffect } from "react"
import Button from "../Button/Button"
import './Card.scss'
import {IoIosHeart} from 'react-icons/io'
import {useSelector,useDispatch} from "react-redux"
import { selectorIsModal } from "../../store/selectors" 
import { actionAddToShop, actionHandleFavorite, actionModal } from "../../store/actions"  

function CardFlower({ cardflower ,isFavorite }) {
    const {
        title,
        cost, 
        artc
    } = cardflower
    const dispatch = useDispatch()
    const isModal = useSelector(selectorIsModal)
    const closeSecondModal = () => {
         dispatch(actionModal(null));
    };
  
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const addToCart = (card) => {
        // handleShop(card);
        dispatch(actionAddToShop(card))
        setIsAddedToCart(true)
        alert("Товар додано до кошика, приємних покупок!")
        // 'Додати до кошика' : 'Додано' 
    }
    useEffect(() => {
  if (isAddedToCart) {
      dispatch(actionModal(false));
      setIsAddedToCart(false);
  }
}, [isAddedToCart, dispatch]);
    const toggleFavorite = () => {
        dispatch(actionHandleFavorite(cardflower))
        // console.log("cardflower======>>>>", cardflower)
        //  handleFavorite()
    };
    
    return (
        <>
        <div className={cx("card__item")}>
            <img src={cardflower.imgIcon} alt='flower'></img>
                <h2 className="card__item_title">{title}</h2>
                <div className="card__item_card">
                <div>
                    <p className="text">Вартість: {cost} грн</p>
                        <p className="text">Артикул № {artc}</p>
                    </div>
                    <div>
                        <Button className={cx("favorite_img", { "favorite": isFavorite })}
                            type='button'
                            onClick={toggleFavorite}>{isFavorite ? <IoIosHeart  className="favorite" style={{ width: '35px', height: '45px' }}/>  : <IoIosHeart style={{ width: '35px', height: '45px' }}/>} </Button>
                        



                        <Button type='button' children={isAddedToCart ? 'Додано' : 'Додати до кошика'} onClick={() =>
                        dispatch(actionModal(artc))}></Button>
                    
                    {isModal===artc && <ModalAddTo
          title={`${cardflower.title}`} 
          desc={"обраний товар буде додано до кошика"}
                             handleClose={closeSecondModal}
                        handleOk={()=>addToCart(cardflower)}
                    />
                    }
                    </div>
                    
                </div>
        </div>
            
    </>
    )
}
CardFlower.propTypes = {
    cardflower: PropTypes.object,
  handleFavorite: PropTypes.func.isRequired,
 handleShop: PropTypes.func.isRequired,
}

export default CardFlower