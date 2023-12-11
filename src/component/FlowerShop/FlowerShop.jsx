import { useEffect, useState } from "react"
// import { sendRequest } from "../../helpers/sendRequest"
import Card from "../Card/Card"
import { actionFetchProduct } from "../../store/actions.js"
import { useDispatch } from "react-redux"
import {useSelector} from "react-redux"
import { selectFlowerShopArr} from "../../store/selectors.js"
import { useDisplayList } from "../ListCard/ListCard"
import Button from "../Button/Button"

function FlowerShop({ handleShop, handleFavorite, toggleFavorite,favorite }) {
    const dispatch = useDispatch()
    const { listCard, toggleListCard } = useDisplayList()
    const flowersShopArr = useSelector(selectFlowerShopArr)
    
    useEffect(() => {
        dispatch(actionFetchProduct())
    }, [])

    return (
        <>
            
            <h2 className="bunner__title">Наші бестселери</h2>
             <div>
        <Button type="button" onClick={toggleListCard}>
                     {listCard === 'cards' ? 'Картки / Список' : 'Список / Картки'}     
        </Button>
      </div>
<div className={ listCard ==='cards'?"flower-wrapper":"flower-wrapper-list"}>
                {flowersShopArr?.cardflower?.length>0 &&  <Card date={flowersShopArr.cardflower} handleShop={handleShop} handleFavorite={handleFavorite} toggleFavorite={toggleFavorite} favorite={favorite} /> }
               
            </div>
        </>  
    )
}
// FlowerShop.propTypes = {
//    handleFavorite: PropTypes.func.isRequired,
//  handleShop: PropTypes.func.isRequired,
// }

export default FlowerShop