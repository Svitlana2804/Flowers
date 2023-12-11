import React, {  useEffect } from 'react';
import './Basket.scss'
import  { MdRemoveShoppingCart } from "react-icons/md"
import Button from '../../component/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
// import { selectorRemove } from '../../store/selectors'; 
import { actionRemoveProduct } from '../../store/actions';
import PageForm from '../PageForm/PageForm'; 
import { selectorShop } from '../../store/selectors';


const BasketPage = () => {
  const dispatch = useDispatch() 
  const basket = useSelector(selectorShop)
   useEffect(() => { 
     localStorage.setItem("shopData", JSON.stringify(basket));
  }, [basket]);
// console.log('BASKET IN BASKET',basket)


  // const [basketItems, setBasketItems] = useState([]);
  //  useEffect(() => {
  //   const storedBasketItems = JSON.parse(localStorage.getItem('shopData')) || [];
  //   setBasketItems(storedBasketItems);
  // }, []);
// console.log('localstorage data', basketItems)
 
  // const handleDeleteProduct = (item) => {
  //   const updateBasketItems = [...basketItems]
  //   updateBasketItems.splice(item.artc, 1)
  //   setBasketItems(updateBasketItems);
  //   localStorage.setItem('shopData', JSON.stringify(updateBasketItems));
  //   console.log('delete')
  // } 
  const deleteProduct = (indexItem) => {
    dispatch(actionRemoveProduct(indexItem))
  }
//   Загальна вартість
 const totalCost = basket.reduce((total, item) => total + parseFloat(item.cost), 0);
  //  console.log("totalCost", totalCost)
  return (
    <>
      <h2>Товари ,що були додані до корзини</h2>
      <div className="basket">
        
         <>
            <ul className='basket__list'>
              {basket.map((item, index) => (
              <li key={index}>
               <img src={item.imgIcon} style={{ width:'140px', height:'130px',borderRadius:'50px'}} /> {item.title} {item.cost}{`грн`}
                 <span> Кількість: {item.quantity}</span>
                  <Button onClick={() => deleteProduct(index)}
                  style={{ border: 'none', padding: '0px', width: 'auto', height: 'auto' }}>
                  <MdRemoveShoppingCart style={{ width: '35px', height: '45px'}} />
                 </Button>
            
              </li>
              ))}
            </ul>
          <h3>Всього до сплати:{totalCost} грн</h3>
     
        </>
        <PageForm />
      </div>
      
    </>
  )
}

export default BasketPage