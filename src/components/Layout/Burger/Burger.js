import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

function Burger(props) {
    let transformedIngredients=Object.keys(props.ingredients)   //converting object to array of keys
       .map(igKey=>{
         return [...Array(props.ingredients[igKey])].map((_,i)=>{    //creating an array with the igkey(creates an array of 2 items if value is 2)
             return  <BurgerIngredient key={igKey+i} type={igKey}/>
         })
     })  
     .reduce((arr,el)=>{
         return arr.concat(el)   //flattening the array into one array by using reduce
     } ,[]) ;
     console.log(transformedIngredients)   
     
     if (transformedIngredients.length===0){     //checking if there are ingredients or not
         transformedIngredients=<p>Start adding the ingredients</p>
     }                   
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}

            <BurgerIngredient type="bread-bottom"/>

        </div>
    )
}

export default Burger
