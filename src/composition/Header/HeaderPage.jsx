import "./HeaderPage.scss"
import {Link} from "react-router-dom"
import Navigation from "./Navigation/Navigation"
import PropTypes from 'prop-types'
import { useSelector } from "react-redux/es/hooks/useSelector"
import {selectorFavorites, selectorShop} from "../../store/selectors"
function HeaderPage() {
    const favorite = useSelector(selectorFavorites)
    // console.log("FAVORITE",favorite)
    const shop = useSelector(selectorShop)
    // console.log('SHOP',shop)
    return (
        <header>
            <Link to="/"><img className="logo" src="./public/icons/logo.png" alt="logo"></img></Link>
           <Navigation/>
            <div className="header__item">
                <Link to="/basket"><img className="header__item_hum" src="./public/icons/shopping.png" alt="shopping"></img></Link>
                <span className="count">{shop.length} </span>
                <Link to="/favorite"><img className="header__item_fav" src="./public/icons/favorite.png" alt="favorite"></img></Link>
                <span className="count">{favorite.length}</span>
            </div>
           
        </header>
    )
}
HeaderPage.propTypes = {
    shop: PropTypes.array,
}
export default HeaderPage