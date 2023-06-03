import Modal from "../ui/Modal/Modal";
import classes from "./cart.module.css";
import Cartcontext from "../../store/Cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(Cartcontext);
  const total = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasitem = cartCtx.items.length > 0;
  const RemoveCartItem = id =>{
    cartCtx.removeItem(id)

  }
  const AddCartHandler = (item) =>{
    cartCtx.addItem(item)

  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={RemoveCartItem.bind(null , item.id)}
          onAdd={AddCartHandler.bind(null , item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.hideCart}>
          Close
        </button>
        {hasitem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
