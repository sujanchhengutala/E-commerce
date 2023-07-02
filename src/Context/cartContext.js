import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

// Getting data from local storage
const getLocalCartData =()=>{
  let localStorageData = localStorage.getItem("sujanCart")

const parsedData = JSON.parse(localStorageData)
if(!Array.isArray(parsedData)) return []

return parsedData
}
/////////////////////////////////////////

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};


const CartContextprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, amount, product, color) => {
    dispatch({ type: "ADD_TO_CARD", payload: { id, amount, product, color } });
  };

  //to remove individual items from cart
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  //to clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
// to increment and decrement product
const setIncrement = (id)=>{
  dispatch({type:"SET_INCREASE", payload:id})
}
const setDecrement = (id)=>{
  dispatch({type:"SET_DECREASE", payload:id})
}



  // to add the data in localStorage
  // we use get and set
  useEffect(() => {
    // dispatch({type:"CART_TOTAL_ITEM"})
    // dispatch({type:"CART_TOTAL_PRICE"})
    dispatch({type:"CART_ITEM_PRICE_TOTA"})
    localStorage.setItem("sujanCart", JSON.stringify(state.cart));
  },[state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart,setIncrement , setDecrement  }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextprovider, useCartContext };



