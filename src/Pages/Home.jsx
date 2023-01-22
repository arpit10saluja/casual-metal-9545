import { Button, Grid, Stack, Spinner } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Products"





export default function Home() {

  const [ProductData, setProductData]=useState([])
  const [catg, setCatg]=useState("products")
  const [err, setErr]=useState(false)
  const [isLoading, setIsLoading]=useState(false)


  const getData=(catg)=>{
    return(axios.get(`http://localhost:${8080}/${catg}`)
    .then((res)=>
      res?.data)
    .catch((err)=>{
      console.log(err)
      setErr(true)}))
    .finally(()=>setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    getData(catg)
    .then((res)=>setProductData(res))

  },[catg])
  


  return (
    <Stack gap={"50px"} alignItems="center">
    <Stack spacing={"10px"} direction="row" justifyContent="center">
      <Button onClick={()=>setCatg("products")}>New</Button>
      <Button onClick={()=>setCatg("male")}>Men</Button>
      <Button onClick={()=>setCatg("female")}>Women</Button>
    </Stack>

    {isLoading?<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>:err?<h1>Something went wrong</h1>:<Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]} gap={"20px"} margin="100px">
        {ProductData.map((product)=>(
        <Product props={product} key={product.id}/>
        ))}
    </Grid>}
    </Stack>

  )
}

