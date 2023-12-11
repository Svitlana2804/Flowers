import CardFlower from "./CardFlower"
import PropTypes from 'prop-types'
import './Card.scss'
import { useSelector } from "react-redux"
import { selectorFavorites } from "../../store/selectors";

function Card({ date,handleShop,  handleFavorite }) {
    const favorite = useSelector(selectorFavorites);
 const cardItem = date.map((item, index) => (
    <CardFlower
      cardflower={item}
      key={index}
      handleShop={handleShop}
      handleFavorite={handleFavorite}
      isFavorite={favorite.find((card) => card?.artc === item?.artc)}
    />
  ));
  return <div className="flower-card">{cardItem}</div>;
}
Card.propTypes = {
    date: PropTypes.array,
    handleShop: PropTypes.func,
    handleFavorite:PropTypes.func,
}
export default Card