import React,{Fragment} from 'react'
import AvailableMeals from '../AvailableMeal/AvailableMeals'
import MealSummary from '../MealSummary/MealSummary'

const Meals = () => {
  return (
    <Fragment>
        <MealSummary/>
        <AvailableMeals/>
    </Fragment>
  )
}

export default Meals