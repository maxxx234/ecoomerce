
import { ShopContext } from "../context/ShopContext"
import ProductsItem from "./ProductsItem";
import Title from "./Title";
import { useState,useContext,useEffect } from "react";
const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller,setbestSeller] = useState([]);
 
    useEffect(()=>{
const bestProduct = products.filter((item)=>(item.bestseller));
setbestSeller(bestProduct.slice(0,5))
    },[products])
  return (
 <div className="my-10">
    <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={'SELLERS'}/>
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel nam tenetur sunt pariatur, vero earum enim </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  ">
{
    bestSeller.map((item,index)=>(
<ProductsItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}  />
    ))
    }
    </div>
 </div>
  )
}

export default BestSeller