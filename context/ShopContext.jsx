import { createContext, useEffect } from "react";
import { products } from "../assets/assets";
import PropTypes from "prop-types";
export const ShopContext =  createContext();
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ShopContextProvider = (items,props) =>{
const currency = '$';
const delivery_fee = 10; 
const [search,setSearch] = useState('');
const [showsearch, setShowSearch] = useState(true)
const [cartItems,setCartItems] = useState();

const navigate = useNavigate()


const addToCart = async (itemId,size) => {
if(!size){
toast.error('Select Product Size')
return;
}

    let cartData = structuredClone(cartItems);
    if(cartData[itemId]){
        if(cartData[itemId][size]){
            cartData[itemId][size] += 1;
        }
        else{
            cartData[itemId][size] = 1;
        }
    }
    else{
        cartData[itemId]= {};
        cartData[itemId][size ]= 1;

    }
    setCartItems(cartData)
}

useEffect(()=>{
console.log(cartItems)
},[cartItems])



 
const getCartCount = () =>{
let totalCount = 0;
for (const items in cartItems){
    for( const item in cartItems[items]){
        try {
           if(cartItems[items][item] > 0){
            totalCount += cartItems[items][item];
           } 
        } catch (error) {
            console.log("hi")
        }
    }
}
return totalCount;
}
const  updateQuantity = async(itemId,size,quantity)=>{
    let cartData = structuredClone(cartItems);
    cartData[itemId][size]= quantity;

    setCartItems(cartData);
}

const getCartAmount = async() => {
    let totalAmount = 0;
    for(const items in cartItems){
        let iteminfo = products.find((product) => product._id === items);
        for (const item in cartItems[items]){
            try {
                if(
                    cartItems[items][item] > 0
                ){
                    totalAmount += iteminfo.price * cartItems[items][item]
                }
            }catch(error) {

            }
        }
    }
    return totalAmount;
}

const value = {
    products , currency , delivery_fee,
    search,setSearch,showsearch,setShowSearch,cartItems,addToCart,
    getCartCount,updateQuantity,items,navigate
        }
    

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    ) 
 }
 ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
 export default ShopContextProvider
//  usecontext is a react hook that you to shae state between components without 
// passing props manually throiugh each level of comopnent tree

// for global data that multiple componets needs to access such as user information

// in react state refers the object that holds the dyanimc data tht can change over'time
// typically duw to user actions or system evenets
// state is used to control how a component behaves and renders

// why eror of children is not props validates

// This rule ensures that the props being used in a component are defined and validated using PropTypes.

// PropTypes.node: This specifies that children can be any renderable element (string, JSX, number, or array of elements).
// isRequired: Marks the children prop as required, so the warning won't appear unless it's missing.
