import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import ProductsItem from "./ProductsItem"
import Title from "./Title"


const LatestCollection = () => {

    const { products }  = useContext(ShopContext)
// use context hook is used to transfer the information of  products inside the shopcontext 

  const [latestProducts,setlatestProducts] = useState([]);
useEffect(()=> {
    setlatestProducts(products.slice(0,10));
},[products])

  return (
  <div className="my-10">
<div className="text-center py-8 text-3xl">
<Title text1={'LATEST'} text2={'COLLECTIONS'}/>
<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis dolor ipsa possimus nobis id odio at iure, dolorem aperiam
</p>
</div>
{/* rendering products */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grids-cols-5s gap-4 gap-y-6">
{
  latestProducts.map((item,index)=>(
    < ProductsItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
  ))
}
</div>
  </div>

  )
}
export default LatestCollection