import React from 'react'
import {useParams} from 'react-router-dom'

const ProductDetails = () => {
  const{id}=useParams()
   const products=[
        {id:1,name:'mobile',desc:'with call feature'},
        {id:2,name:'laptop',desc:'with high specs'},
        {id:3,name:'keyboard',desc:'with all keys'},

    ]
    const product=products.find((p)=>(p.id===Number(id)))
    if (!product) {
    return <h2>Product Not Found</h2>
  }
    

  return (
    <div>
      <h1 className="w-full text-center font-extrabold ">Product Details</h1>
      
      <h3>Name:{product.name}</h3><br></br>
      <p>Description:{product.desc}</p>
    </div>
  )
}

export default ProductDetails