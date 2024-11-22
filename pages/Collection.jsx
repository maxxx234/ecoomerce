import { useContext, useState,useEffect, useCallback  } from "react"
import { ShopContext } from "../context/ShopContext"

import { assets } from "../assets/assets"
import Title from "../components/Title"
import ProductsItem from "../components/ProductsItem"
const Collection = () => {
 
const {products, search, showsearch} = useContext(ShopContext)
const [showFilter,setShowFilter] = useState(false);
const [filterProducts, setFilterProducts]= useState([]);
const [category,setCategory] = useState([]);
const [subCategory,setSubCategory] = useState([])
 const[sortType,setSortType] = useState('relavent')
const toggleCategory = (e) => {
  if (category.includes(e.target.value)){
setCategory(prev=> prev.filter(item => item !== e.target.value))
  }
  else{
    setCategory(prev => [...prev,e.target.value])
  }
}




const toggleSubCategory = (e) => {
  if (subCategory.includes(e.target.value)){
    setSubCategory(prev=> prev.filter(item => item !== e.target.value))
  }

  else{
    setSubCategory(prev => [...prev,e.target.value])
  }
}



          
useEffect(()=>{
  setFilterProducts(products)
},[products])



// useEffect(()=> {
//   const applyFilter = () =>{
//     let productsCopy = products.slice();
// if (showsearch && search){
//   productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
// }

//     if (category.length > 0 ) {
//       productsCopy = productsCopy.filter(item => category.includes(item.category))
//     }
//     if (subCategory.length > 0) {
//       productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory) )
//     }
  
//     setFilterProducts(productsCopy)
//   }

// const SortProduct = () => {
//   let fpCopy = filterProducts.slice();

//   switch(sortType) {
//     case 'low-high' :
//       setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
//       break;
//     case 'high-low' :
//       setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
//       break;
//    default:
//     applyFilter();
//     break;
//   }
  
 
// }


//   applyFilter();
//   SortProduct();

// },[category, search,showsearch,filterProducts, products, sortType, subCategory])


// applyFilter();
// },[filterProducts,sortType, category, products,subCategory])

// useEffect(()=>{
//   SortProduct()
// },[])

const applyFilter = useCallback(() =>{
      let productsCopy = products.slice();
      // applyFilter is wrapped in useCallback, so it only re-creates when its dependencies (category, products, search, showsearch, and subCategory) change. This improves performance by avoiding unnecessary re-creations of this function.
  if (showsearch && search ){
    productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))
  }
  
      if (category.length > 0 ) {
        productsCopy = productsCopy.filter(item => category.includes(item.category))
      }
      if (subCategory.length > 0) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory) )
      }
    
      setFilterProducts(productsCopy)
    },[category, products, search, showsearch, subCategory])

    useEffect(() => {
 
      applyFilter();
      
        
      }, [applyFilter, category, search, showsearch, subCategory])
  
  const SortProduct = useCallback(() => {
    let fpCopy = filterProducts.slice();
  
    switch(sortType) {
      case 'low-high' :
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;
      case 'high-low' :
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
        break;
     default:
      applyFilter();
      break;
    }
    
   
  },[applyFilter,filterProducts, sortType])



useEffect(()=> {
  SortProduct();
},[SortProduct, sortType,filterProducts])

 


 


  return (
   <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
{/* Filter options */}
<div className="min-w-60">
<p onClick={()=> setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">FILTERS
  <img  className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : '' }`} src={assets.dropdown_icon}/>
</p>
{/* Category filter */}
<div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden' }sm:block `}>
<p className="mb-3 text-sm font-medium">CATEGORIES</p>
<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
<p className="flex gap-2">
<input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory} /> MEN
</p>
<p className="flex gap-2">
<input className="w-3" type="checkbox" value={'Women'}onChange={toggleCategory} /> WOMEN
</p>
<p className="flex gap-2">
<input className="w-3" type="checkbox" value={'Kids'}onChange={toggleCategory}/> KIDS
</p>

</div>
</div>
{/* subCategory filter */}
<div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden' }sm:block `}>
<p className="mb-3 text-sm font-medium">TYPE</p>
<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
<p className="flex gap-2">
<input className="w-3" type="checkbox" value={'Topwear'}  onChange={toggleSubCategory}/> TOPWEAR
</p> 
<p className="flex gap-2">
<input className="w-3" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> BOTTOMWEAR
</p>
<p className="flex gap-2">
<input className="w-3" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> WINTERWEAR
</p>

</div>
</div>
</div>
{/* right side  */}
<div className="flex-1">
<div className="flex justify-between text-base sm:text-2xl mb-4">
<Title text1={'All'} text2={"COLLECTIONS"}/>
{/* Product sort */}
<select onChange={(e)=> setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
  <option value="relavent">Sort by: Relavent</option>
  <option value="low-high">Sort by: Low to high</option>
  <option value="high-low">Sort by: high to low</option>
</select>
</div>
{/* Map products */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-4 gap-y-6 ">
{
  filterProducts.map((item,index)=>(
    <ProductsItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
  ))
}
</div>
</div>
   </div>
  )
}

export default Collection 