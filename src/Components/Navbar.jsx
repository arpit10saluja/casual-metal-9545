import { Avatar, Box, Stack,  Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";




export default function Navbar() {

  return (  
   <Stack padding="20px" display="flex" justifyContent={"space-between"} direction="row">
    <Link to={"/"}>
    <Avatar 
    src="https://i.ibb.co/7VMTfRQ/logo.jpg" 
    alt="logo"
    width={"50px"}
    />
    </Link>
    <Link to={"/"}>
     <Text fontWeight={"bold"} fontSize="30px">My Shop</Text>
    </Link>

    <Box display={"flex"} gap="20px">
        <Link to={"/login"}>
          <Text>Login</Text>
        </Link>
        <Link to={"/cart"}>
            <Text>Cart</Text>
        </Link>
    </Box>
   
   
 </Stack>

  )
}

