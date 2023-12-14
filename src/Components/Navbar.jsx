import { Avatar, Box, Stack, Text, Button, IconButton, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      padding={["10px", "20px"]}
      display="flex"
      flexWrap={["nowrap","wrap"]}
      justifyContent={["space-evenly"]}
      direction={["row"]}
      alignItems={["center", "flex-start"]}
    >
      <Box display="flex" alignItems="center">
        <Link to={"/"}>
          <Avatar
            src="https://i.ibb.co/7VMTfRQ/logo.jpg"
            alt="logo"
            width={["70px", "50px"]}
            mb={[4, 0]}
          />
        </Link>
        <Link to={"/"}>
          <Text
            fontWeight={"bold"}
            fontSize={["24px", "30px"]}
            marginLeft={["0", "20px", "80px", "140px", "160px", "180px"]}
            display={["none","block"]}
          >
            My Shop
          </Text>
        </Link>
      </Box>

      <Box display={["none", "none", "flex"]} flexWrap="wrap" gap={["10px", "20px"]}>
        <Link to={"/login"}>
          <Button>Log in / Sign Up</Button>
        </Link>
        <Link to={"/cart"}>
          <Button>Cart</Button>
        </Link>
      </Box>

      <Box display={["flex", "flex", "none"]} alignItems="center">
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle menu"
          onClick={onToggle}
        />
      </Box>

      <Box
        display={isOpen ? "flex" : "none"}
        flexDirection="column"
        alignItems="flex-end"
        position="absolute"
        top="0"
        right="0"
        p="4"
        bg="white"
      >
        <Link to={"/login"}>
          <Button onClick={onToggle}>Log in / Sign Up</Button>
        </Link>
        <Link to={"/cart"}>
          <Button onClick={onToggle}>Cart</Button>
        </Link>
      </Box>
    </Stack>
  );
}

