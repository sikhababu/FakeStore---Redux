
import ProductCard from '../Components/ProductCard'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Loading from '../Components/Loading'


function Homepage() {
  const [Products, setProducts] = useState([])
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {

      setProducts(res.data)

    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
    {
      
     Products.length ?  <div className="container my-4">

<div className="row g-4">

  {

    Products.map((product) => (

      <div key = {product.id} className ="col-md-3 g-4 d-flex">

        <ProductCard item={product} />
        
      </div>

    ))

  }


</div>
</div> : <Loading />
    
}
 

    </>
  )
}

export default  Homepage;
