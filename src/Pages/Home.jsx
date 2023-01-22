import { Button, Grid } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Products"


export default function Home() {

  const [ProductData, setProductData]=useState([])

  useEffect(() => {
    axios.get(`http://localhost:${8080}/products`)
    .then((res)=>setProductData(res?.data))
    .catch((err)=>console.log(err))  
    console.log(ProductData)

  },[])
  


  return (
    <>

    <Button>General Products</Button>
    <Button>Male Products</Button>
    <Button>Female Products</Button>

    <Grid templateColumns='repeat(4, 1fr)' gap={"20px"} margin="50px">
        {ProductData.map((product)=>(
        <Product props={product}/>
        ))}
    </Grid>
    </>

  )
}

