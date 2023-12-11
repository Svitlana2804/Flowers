import React from "react";
import { useState, useContext, useEffect, createContext } from "react";
import { sendRequest } from "../../helpers/sendRequest";

const ListCardContext = createContext();
export const ListCardProvider = ({ children }) => {
   const [listItems, setListItems] = useState([]);
  const [listCard, setListCard] = useState('cards');
  
    const toggleListCard = () => {
        setListCard((prevCard) => (prevCard === 'cards' ? 'table' : 'cards'))
  };
  
// Завантаження даних з data.json за допомогою useEffect
  useEffect(() => {
     sendRequest('/data.json')
            .then(({cardflower}) => {
            setListItems(cardflower)
        })
	 }, [])


    return(
        <ListCardContext.Provider value={{ listCard, toggleListCard,listItems }}>
            {children}
        </ListCardContext.Provider>
    );
};

export const useDisplayList = () => {
  const context = useContext(ListCardContext);
  if (!context) {
    throw new Error('useDisplayList must be used within a DisplayModeProvider');
  }
  return context;
};