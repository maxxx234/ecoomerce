import { useContext, useEffect,useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductsItem from "./ProductsItem";
import PropTypes from 'prop-types';

const RelatedProducts = ({category,subCategory}) => {
    const { products} = useContext(ShopContext);
    const [related,setRelated] = useState([]);

    useEffect(()=>{
if(products.length > 0){
let productsCopy = products.slice();

productsCopy = productsCopy.filter((item)=> category === item.category)

productsCopy = productsCopy.filter((item)=> subCategory === item.subCategory)

setRelated(productsCopy.slice(0,5))
}

    },[category, products, subCategory])
  return (
    <div className = "my-24">
        <div className="text-center text-3xl py-2">
<Title text1 = {"Related"} text2={"PRODUCTS"}/>
        </div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gris-cols-5 gap-4 ">
{
    related.map((item,index)=> {
        <ProductsItem key = {index} id={item._id} name={item.name} price={item.price} image={item.image}/>
    })
}
</div>
    </div>
  )
}
RelatedProducts.propTypes = {
   category:PropTypes.string.isRequired,
   subCategory:PropTypes.string.isRequired
  }
export default RelatedProducts
// The propTypes property on RelatedProducts is used to validate the props that are passed to the RelatedProducts component. This ensures that each prop is of the expected type, which helps prevent bugs by catching type-related errors during development.