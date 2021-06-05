import React, { useState } from "react";

export const cartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={[cart, setCart]}>
      {props.children}
    </cartContext.Provider>
  );
};
