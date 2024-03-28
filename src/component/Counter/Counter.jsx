import React, { useState,useEffect } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { actionQuantity } from '../../store/actions';
import { selectorShop } from '../../store/selectors';

const CardCounter = () => {
  const dispatch = useDispatch()
   const basket = useSelector(selectorShop)
   
  const [count, setCount] = useState(0);

   const handleIncrease = (artc) => {
    dispatch(actionQuantity({artc,operator:"+"}))
    setCount(count + 1);
  };

  const handleDecrease = (artc) => {
    dispatch(actionQuantity({artc,operator:"-"}))
    setCount(Math.max(count - 1, 0));
    
  }
  return (
    <div>
      <CounterButton onIncrease={handleIncrease} onDecrease={handleDecrease} count={count} />
    </div>
  );
};

  const CounterButton = ({ onIncrease, onDecrease, count }) => {
    return (
      <div>
        <p>Кількість: {count}</p>
        <button onClick={onIncrease}>Збільшити </button>
        <button onClick={onDecrease}>Зменшити </button>
      </div>
    );
  };

export default CardCounter