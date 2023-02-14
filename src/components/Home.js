import {  Heading, Textarea, Button, Flex,Box,  Accordion,AccordionItem,AccordionButton ,AccordionPanel,AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

function Uppercase(props) { 
  const [btntext,setBtnText]=useState("Light Mode")
   
 
   //darkMode
  const [style,newStyle]=useState({
    color:"white",
    backgroundColor:"black"

  })
  const toggleStyle=()=>{
    if(style.color === 'white'){
      newStyle({
        color:"black",
        backgroundColor:"white"
    
      }) 
      setBtnText("Light Mode")
      }
      else{
        newStyle({
          color:"white",
          backgroundColor:"black"
      
        })
        setBtnText("Dark Mode")
      }
    
  }
  const [text, setText] = useState("");
  function onClickUpHandler() {
    const newText = text.toUpperCase()
    setText(newText);
  }
  function onClickLoHandler() {
    const newText = text.toLowerCase()
    setText(newText);
  }
  function onClickClearHandler() {
    const newText = ""
    setText(newText);
  }
  function onChangeHandler(event) {
    setText(event.target.value);
  }
  function onHandleCopy(){
 
    const text = document.getElementById("box")
    text.select()
    navigator.clipboard.writeText(text.value)

  }
  function spacesRemover(){
    let newText = text.split(/ [ ] +/)
    setText(newText.join(" "))
  }

  return (
    <div style={style}>
    
    <div className="container" >
      <Heading pb={5}> {props.title} </Heading>

      <Textarea mb={7} height={300} placeholder="Enter Text Here..." value={text} onChange={onChangeHandler} id="box" />

      <Button
        onClick={onClickUpHandler}
        size="md"
        height="48px"
        width="150px"
        border="2px"
        borderColor="green.500"
        mr={6}
        colorScheme='teal'
      >
        Uppercase It
      </Button>
      <Button
        onClick={onClickLoHandler}
        size="md"
        height="48px"
        width="150px"
        border="2px"
        borderColor="green.500"
        colorScheme='teal'
      >
        Lowercase It
      </Button>

      <Button
        onClick={onHandleCopy}
        size= {"md"}
        height="48px"
        width="150px"
        border="2px"
        borderColor="green.500"
        colorScheme='teal'
        ml={"15px"}

      >
        Copy
      </Button>
      <Button
        onClick={spacesRemover}
        size= {"md"}
        height="48px"
        width="150px"
        border="2px"
        borderColor="green.500"
        colorScheme='teal'
        ml={"15px"}

      >
       Remove Spaces
      </Button>
      
      <Button
        onClick={onClickClearHandler}
        marginLeft={8}
        size="md"
        height="48px"
        width="90px"
        border="2px"
        bg="red"
        borderColor="red.500"
     
      >
      Delete
      </Button  >
      <Button disabled={text.length===0} onClick={toggleStyle} 
       
        marginLeft={8}
        size="md"
        height="48px"
        width="90px"
        border="2px"
       
        borderColor="red.500"
   
        colorScheme='teal'
      >
      {btntext}
      </Button>
      
       

      </div>
      <div className="container">
        <Heading mt={10} mb={6}>Your Text Summary </Heading>
        <Flex direction={"column"}>
        Words: {text.split(' ').filter((elem)=>{return elem !==0}).length -1} <br />
        Characters: {(text.trim().length)} <br />
        Minutes Read: {0.008* text.split(' ').length } 
        </Flex>
        <Heading mb={5}>Preview</Heading>
        <Text>{text.length===0? "Nothing To Preview": true}</Text>
        <Box bg='azure' w='100%' p={4} color='black' borderRadius={10}> {text}</Box>
       
      </div>
     
   

  
  </div>
  )

}


export default Uppercase
