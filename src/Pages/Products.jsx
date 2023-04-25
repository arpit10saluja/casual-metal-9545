import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
import axios from 'axios'

function BookNow() {
  const toast = useToast()
  return (
    <Button
    variant='solid' colorScheme='blue'
      onClick={() =>
        toast({
          title: 'You Order has Placed Successfully.',
          description: `Your order id ${Math.floor(Math.random()*10000)}`,
          status: 'success',
          duration: 8000,
          closable: true,
        })
      }
    >
      Buy Now
    </Button>
  )
}

const handleClick=(props)=>{
axios.post(`https://myshop-apps-server.onrender.com/cart`,
props).then((res)=>res)
.catch((err)=>console.log(err))
}

function Product({props}) {
  const {id, description, images, name, price, ratings, strikeOfPrice}= props

  return (
    <div>
      <Card maxW='sm' key={id} width={"auto"} height="760px">
    <CardBody>
    <Image
      src={images}
      alt={props.name}
      borderRadius='lg'
      height={"300px"}
      margin="auto"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='gray.600' fontSize='xl' as='del'>
        ${strikeOfPrice}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${price}
      </Text>
      <Text as="p">Rating : {ratings?.rating}</Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
     <BookNow />
      <Button variant='ghost' colorScheme='blue'
      onClick={()=>handleClick(props)}
      >
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    </div>
  )
}

export default Product