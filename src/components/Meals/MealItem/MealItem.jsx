import React,{useContext} from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import Cartcontext from '../../../store/Cart-context'
const MealItem = ({name,discription,prices ,id}) => {
    const cartCtx =  useContext(Cartcontext)
    const price = `$${prices.toFixed(2)}`

    const addcartHandler = (amount) =>{
        cartCtx.addItem({
            id:id,
            name:name,
            amount:amount,
            price:prices

        })

    }
  return (
    <li className={classes.meal}>
        <div>
            <h3>
                {name}
            </h3>
            <div className={classes.description}>
                {discription}

            </div>
            <div className={classes.price}> 
               {price} 
            </div>
        </div>
        <div>
            <MealItemForm addcartHandler={addcartHandler}/>

        </div>
    </li>
  )
}

export default MealItem