import React, { Component } from 'react'
import Burger from '../../components/Layout/Burger/Burger'
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Layout/Burger/OrderSummary/OrderSummary'
const INGREDIENT_PRICES={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
 class BurgerBuilder extends Component {
     constructor(props){
         super(props);
         this.state={
             ingredients:{
                 meat:0,
                 cheese:0,
                 salad:0,
                 bacon:0
             },
             totalPrice:4,
             purchasable:false,
             purchasing:false

         }
     }
    
     updatePurchaseState(ingredients){
         
                 const sum=Object.keys(ingredients)   //we get an array containing properties eg[cheese,salad]
                 .map(igKey=>{
                     return ingredients[igKey]   //we get an array of values for each type
                 }) 
                 .reduce((sum,el)=>{
                     return sum+el        //initial sum value is 0 
                 },0)   
                 this.setState({purchasable:sum>0})     //purchasable is true
     }

     addIngredientHandler=(type)=>{
         const oldCount=this.state.ingredients[type];
         const updatedCount=oldCount+1;
         const updatedIngredients={
             ...this.state.ingredients
         }
         updatedIngredients[type]=updatedCount;
         const priceAddition=INGREDIENT_PRICES[type];
         const oldPrice=this.state.totalPrice;
         const newPrice=oldPrice+priceAddition;
         
         this.setState({
             totalPrice:newPrice,
             ingredients:updatedIngredients
         })
         this.updatePurchaseState(updatedIngredients);
     }
     removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type]=updatedCount;
         const priceDeduction=INGREDIENT_PRICES[type];
         const oldPrice=this.state.totalPrice;
         const newPrice=oldPrice-priceDeduction;
         this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
     }
    
     purchaseHandler=()=>{
         this.setState({purchasing:true})
     }
     purchaseCancelHandler=()=>{
         this.setState({purchasing:false})
     }
     purchaseContinueHandler=()=>{
         alert("Continue");
     }

    render() {
        const disabledInfo={
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return (
            <>
                 <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                     <OrderSummary ingredients={this.state.ingredients}
                                   price={this.state.totalPrice}
                                   purchaseCancelled={this.purchaseCancelHandler}
                                   purchaseContinued={this.purchaseContinueHandler}/>
                 </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                               ingredientRemoved={this.removeIngredientHandler}
                               disabled={disabledInfo} 
                               purchasable={this.state.purchasable}
                               ordered={this.purchaseHandler}
                               price={this.state.totalPrice} />
            </>
        )
    }
}

export default BurgerBuilder
