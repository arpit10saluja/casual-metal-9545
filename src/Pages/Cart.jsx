
import { useEffect, useState } from "react"
import { Spinner,Grid } from "@chakra-ui/react"
import axios from "axios"
import Product from "./Products"

function Cart() {
  const [err, setErr]=useState(false)
  const [isLoading, setIsLoading]=useState(false)
  const [cartData, setCartData]=useState([])



  const getData=()=>{
    return(axios.get(`https://myshop-apps-server.onrender.com/cart`)
    .then((res)=>
      res?.data)
    .catch((err)=>{
      console.log(err)
      setErr(true)}))
    .finally(()=>setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    getData()
    .then((res)=>setCartData(res))

  },[])

  return (
    <>
    {isLoading?<Spinner
      thickness='4px'
      speed='0.65s'
      emptyColor='gray.200'
      color='blue.500'
      size='xl'
      />:err?<h1>Something went wrong</h1>:<Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={"20px"} margin="100px">
            {cartData.map((cart)=>(
              <>
              <Product props={cart} key={cart.id}/>
             
              </>
              ))}
        </Grid>}
    </>
  )
}

export default Cart