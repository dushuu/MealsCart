import React,{useContext, useEffect , useState} from 'react'
import classes from './Hederbtn.module.css'
import CartIcon from './cart'
import Cartcontext from '../../../store/Cart-context'



const HeaderCartbtn = ({ setShowCart}) => {
  const [bumbClass , setBumbClass] = useState(false)
  const cartCtx = useContext(Cartcontext); 
  const {items }=cartCtx
  console.log(cartCtx.items)
  const numberOfCartItems = cartCtx.items
  .reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  console.log(numberOfCartItems)

  const btnClasses =`${classes.button} ${bumbClass ? classes.bump : ''}`

  useEffect(()=>{
    if(items.length === 0){
      return;
    }
    setBumbClass(true)

    const timer = setTimeout(()=>{
      setBumbClass(false);
    },300)

    return()=>{
      clearTimeout(timer)
    }

  },[items])
 
  return (
    <button className={btnClasses} onClick={()=> setShowCart(true)}>
    <span className={classes.icon}>
      
      <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{numberOfCartItems !== undefined ? numberOfCartItems :0}</span>
  </button>

  )
}

export default HeaderCartbtn