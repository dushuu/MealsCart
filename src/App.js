import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header/Header";
import Meals from "./components/Meals/Meal/Meals";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart,setShowCart] = useState(false)
  // const showcartHandler = () =>{
  //   setShowCart(true)
  // }
  const hideCart = () =>{
    setShowCart(false)
  }
  return (
    <CartProvider>
     {showCart && <Cart hideCart={hideCart}/>}
      <Header showcartHandler={setShowCart}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
