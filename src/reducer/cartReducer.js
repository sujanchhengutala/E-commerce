const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CARD") {
    let { id, color, amount, product } = action.payload;


// tackel the existing  products
let existingProduct = state.cart.find((curElem)=>{
  return curElem.id === id + color
})

if(existingProduct){
let updateProduct = state.cart.map((curElem)=>{
  if(curElem.id === id+color){
    let newAmount = curElem.amount + amount
if(newAmount >= curElem.max){
 newAmount = curElem.max
}

    return{
      ...curElem,
      amount:newAmount
    }
  }
  else{
    return curElem
  }
})
return {
  ...state,
  cart:updateProduct,
}
}
else{
    let cartProduct;
    cartProduct = {
      id: id + color,
      name: product.name,
      color,
      amount,
      image: product.image[0].url,
      price: product.price,
      max: product.stock,
    };
    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curElem) => curElem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }


  if(action.type === "CLEAR_CART"){
    return{...state,
    cart: [],
    }
  }

  // for increment the number
  if(action.type ==="SET_INCREASE"){
    let updateProduct = state.cart.map((curElem)=>{
      if(curElem.id === action.payload){
        let incAmount = curElem.amount + 1

        if(incAmount>=curElem.max){
          incAmount =curElem.max
        }

        return {...curElem, 
          amount: incAmount,
        }
      }
      else{
        return curElem
      }
    })
    return{
      ...state,
      cart:updateProduct
    }
  }
  // for decrement the quantity
  if(action.type ==="SET_DECREASE"){
    let updateProduct = state.cart.map((curElem)=>{
      if(curElem.id === action.payload){
        let decAmount = curElem.amount - 1
        
        if(decAmount<=1){
          decAmount = 1
        }

        return {...curElem, 
          amount: decAmount,
        }
      }
      else{
        return curElem
      }
    })
    return{
      ...state,
      cart:updateProduct
    }
  }

  // if(action.type === "CART_TOTAL_ITEM"){
  //   let updatedCart = state.cart.reduce((initial, curElem)=>{
  //     let {amount} = curElem
  //     initial = initial + amount
  //     return initial
  //   }, 0)
  //   return{
  //     ...state,
  //     total_item : updatedCart
  //   }
  // }
  // if(action.type === "CART_TOTAL_PRICE"){
  //   let total_price = state.cart.reduce((initial, curElem)=>{
  //     let {price, amount} = curElem
  //     initial = initial + (price*amount)
  //     return initial
  //   }, 0)
  //   return{
  //     ...state, total_price
  //   }
    
  // }


  if(action.type ==="CART_ITEM_PRICE_TOTA"){
    let {total_item, total_price} = state.cart.reduce((accum, curElem)=>{
      let {price, amount} = curElem
      accum.total_item += amount
      accum.total_price += price * amount
      return accum
    },
    {total_item:0,
    total_price:0})
    return {...state, total_item, total_price}
  }

  return state;
};

export default cartReducer;