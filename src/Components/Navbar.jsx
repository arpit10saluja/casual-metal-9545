import { Avatar, Box, Stack,  Text, Button } from "@chakra-ui/react";
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
     <Text fontWeight={"bold"} fontSize="30px" marginLeft={["80px", "80px", "140px", "160px", "180px"]}>  My Shop</Text>
    </Link>

    <Box display={"flex"} gap="20px">
        <Link to={"/login"}>
         <Button >Log in / Sign Up</Button>
        </Link>
        <Link to={"/cart"}>
        <Button >Cart</Button>
        </Link>
    </Box>
   
   
 </Stack>

  )
}

