import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './ProductDetails.css'



/*export async function getProductDetails(params) {
try{

const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`)
console.log(res.data)
return res.data

}  catch (error){

  console.log(error)
}

}*/



function ProductDetails() {

  const { id } = useParams()
  const [Product, setProduct] = useState({})
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {

      setProduct(res.data)

    }).catch((err) => {
      console.log(err)
    })
  }, [])



  return (
    
    
   
    <div className ="container row g-4 my-4">

      
    <div className="col-md-6 product-image-container">
    
     <img src={Product?.image} alt="product-image" />
      </div>
      
        <div className="col-md-6">
          <h2>{Product?.title}</h2>
          <p className="text-muted">{Product?.category}</p>
          <p>{Product?.description}</p>
          <h3 className="text-primary">${Product?.price}</h3>
          <button className="btn btn-success">Buy Now</button>
        </div>
        
      

        </div>


      )
}

      export default ProductDetails
