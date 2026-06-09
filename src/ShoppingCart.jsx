import { useState } from "react";

const ShoppingCart =()=>{

  const[products, setProducts]=useState([])

  const[productName, setProductName]=useState("")

  const[productPrice,setProductPrice]=useState("")


  const handleAddProduct=()=>{
     
       if(productName.trim()!== "" && productPrice.trim()!== ""){


        const newProduct={
            id:Date.now(),
            name:productName,
            price:parseFloat(productPrice),
            quantity:1
        }

        setProducts([...products, newProduct])
        setProductName("")
        setProductPrice("")

       }

      
  }


  const removeProduct = (id)=>{
   
   const updatedProduct= products.filter(product =>product.id !== id)
   

   setProducts(updatedProduct)



  }


const increaseQuantity=(id)=>{

    console.log(products)

    const updatedProduct= products.map(product =>(

        product.id === id ? {...product, quantity : product.quantity + 1}: product

       
    ))
     setProducts(updatedProduct)
     
}



const decreaseQuantity=(id)=>{

    const updatedProduct = products.map(product =>(

        product.id === id && product.quantity > 1 ? {...product, quantity : product.quantity - 1}: product

    ))

    setProducts(updatedProduct)

    
}



const totalPrice = products.reduce((total, product)=> total + product.price * product.quantity,0)







    return(
        
        <div>
    <h2>Simple Procduct Crat</h2>
         <div>
    <h3>Add Product</h3>

    <input type="text" placeholder="Product Name" onChange={(e)=> setProductName(e.target.value)} value={productName} />
    <input type="number" min="0" placeholder="Product Price" onChange={(e)=> setProductPrice(e.target.value)} value={productPrice}/>
    <button onClick={handleAddProduct}>Add to Cart</button>
        </div>
       {

    
        products.length > 0 ?(
           
            <div>
                <h3>Product in Cart</h3>
                <ul>


       {
          
          products.map(product =>(

            <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price.toFixed(2)}


             <div>
                Quantity:
                <button onClick={()=> decreaseQuantity(product.id)}>-</button>
                {product.quantity}
                <button onClick={()=> increaseQuantity(product.id)}>+</button>
             </div>
           
           <button onClick={()=> removeProduct(product.id)}>Remove</button>

            </li>

          ))
        }
        </ul>


         <h4>Total Price : ${totalPrice}</h4>
            </div>
            
        ) : <p>The Cart is Empty</p>
       }

        </div>
    ) 
}

export default ShoppingCart;