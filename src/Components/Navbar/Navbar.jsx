import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css"
// import Menu from "../Components/Menu/Menu";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigateTo = useNavigate();
  const handleMentoonsClick = () => {
    // Navigate to another website when "Mentoons" button is clicked
    window.open('https://mentoons.com','_blank'); // Replace 'https://example.com' with the URL you want to navigate to
};
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"2em"}
      position={"sticky"}
      top={0}
      zIndex={999}
        border={"1px solid black"}
      backgroundColor={"black"}
      boxShadow={
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      }
    //   w={"100%"}
    >
        <Button
            colorScheme="red"
            backgroundColor={"black"}
            _hover={{ backgroundColor: "#F8C471", color: "black" }}
            borderRadius={"2.5rem"}
            color={"white"}
            w={"14rem"}
            h={"3rem"}
            onClick={()=>navigateTo('/category')}
          >
            Take Quiz
          </Button>

          <Button
            colorScheme="red"
            backgroundColor={"black"}
            _hover={{ backgroundColor: "#F8C471", color: "black" }}
            borderRadius={"2.5rem"}
            color={"white"}
            w={"14rem"}
            h={"3rem"}
            onClick={handleMentoonsClick}
          >
            Mentoons
          </Button>

          <Button
            colorScheme="red"
            backgroundColor={"black"}
            _hover={{ backgroundColor: "#F8C471", color: "black" }}
            borderRadius={"2.5rem"}
            color={"white"}
            w={"14rem"}
            h={"3rem"}
            onClick={()=>navigateTo('/contactUs')}
          >
           Contact Us
          </Button>

          
      <Center
        // border={"1px solid black"}
        p={2}
        w={"55%"}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        <Image
          src={logo}
          alt="logo"
          w={"11rem"}
          onClick={() => navigateTo("/")}
          
        />
      </Center>
      <Center
        w={"85%"}
        // border={"1px solid black"}
        display={"flex"}
        justifyContent={"flex-end"}
      >
        {/* Login section */}
        <div className={styles.log}>
        <Center
          display={"flex"}
          gap={4}
          border={"2px solid #DC6E66"}
          h={"3rem"}
          pl={"1rem"}
          borderRadius={"2.5rem"}
        >
            {/* <Button
            colorScheme="red"
            // backgroundColor={"#DC6E66"}
            _hover={{ backgroundColor: "#DC6E6F", color: "black" }}
            // borderRadius={"2.5rem"}
            color={"white"}
            w={"8rem"}
            h={"3rem"}
          >
            Login
          </Button> */}
          <Text color="white">Become a Member?</Text>  
          {/* // Ensure text color is visible on black background */}
          <Button
            colorScheme="red"
            backgroundColor={"black"}
            _hover={{ backgroundColor: "#F8C471", color: "black" }}
            borderRadius={"2.5rem"}
            color={"white"}
            w={"14rem"}
            h={"3rem"}
            onClick={()=>navigateTo('/user/register')}
          >
            SignUp
          </Button>
          
        </Center>
        
        <Center
          display={"flex"}
          gap={4}
          border={"2px solid #DC6E66"}
          h={"3rem"}
          pl={"1rem"}
          borderRadius={"2.5rem"}
        >
            {/* <Button
            colorScheme="red"
            // backgroundColor={"#DC6E66"}
            _hover={{ backgroundColor: "#DC6E6F", color: "black" }}
            // borderRadius={"2.5rem"}
            color={"white"}
            w={"8rem"}
            h={"3rem"}
          >
            Login
          </Button> */}
          <Text color="white">Already a Member?</Text>  
          {/* // Ensure text color is visible on black background */}
          <Button
            colorScheme="red"
            // backgroundColor={"#DC6E66"}
            backgroundColor={"black"}
            _hover={{ backgroundColor: "#F8C471", color: "black" }}
            borderRadius={"2.5rem"}
            color={"white"}
            w={"14rem"}
            h={"3rem"}
            onClick={()=>navigateTo('/user/login')}
          >
            SignIn
          </Button>
          
        </Center>
        </div>

        {/* <Menu /> */}
      </Center>
    </Flex>
  );
}