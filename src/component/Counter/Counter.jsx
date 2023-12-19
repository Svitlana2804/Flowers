import React, { useState } from 'react';

// const CounterButton = () => {
//   const [count, setCount] = useState(0);

//   const handleButtonClick = () => {
//     setCount(count + 1);
//     };
//     const handleButtonClickTwo = () => {
//         setCount(count - 1);
//     }
//     return (
//     <div>
//       <p>Кількість: {count}</p>
//             <button onClick={handleButtonClick}>Збільшити кількість</button>
//              <button onClick={handleButtonClickTwo}>Зменшити кількість</button>
//     </div>
//   );
// };

const CounterButton = ({ onIncrease, onDecrease, count }) => {
  return (
    <div>
      <p>Кількість: {count}</p>
      <button onClick={onIncrease}>Збільшити кількість</button>
      <button onClick={onDecrease}>Зменшити кількість</button>
    </div>
  );
};
export default CounterButton