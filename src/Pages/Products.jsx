import React from 'react'
import {Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button} from "@chakra-ui/react"
function Product({props}) {
  const {id, brand, description, images, name, price, ratings, strikeOfPrice, type}= props

  return (
    <div>
      <Card maxW='sm' key={id} width={"auto"}>
  <CardBody>
    <Image
      src={images}
      alt={props.name}
      borderRadius='lg'
      height={"50%"}
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
        {description}
      </Text>
      <Text color='blue.600' fontSize='xl' as='del'>
        ${strikeOfPrice}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${price}
      </Text>

    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    </div>
  )
}

export default Product