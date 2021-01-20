import React, { useRef, useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import AddTag from "./components/addTag";

export default function Index() {
  const addTag = useRef();
  const [state, setState] = useState([]);
  const handleAddTag = (tag) => {
    setState([...state, tag]);
  };
  const showAddTag = () => {
    addTag.current.changeShow();
  };
  return (
    <>
      <Flex
        h="230px"
        w="40%"
        mx="auto"
        pt="160px"
        flexWrap="wrap"
        justifyContent="center"
      >
        {state.map((item) => (
          <a href={item.address} target="_blank" key={item.id}>
            <Box
              _hover={{ bgColor: "rgba(32, 33, 36, .1)", cursor: "pointer" }}
              w="112px"
              h="112px"
              borderRadius="4px"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Box
                w="48px"
                h="48px"
                mx="auto"
                bgColor="rgba(241, 243, 244, 1)"
                borderRadius="50%"
              >
                <Box fontSize="30px" textAlign="center" w="48px" h="48px">
                  <Box mt="12px" ml="12px">
                    <img width="24px" height="24px" src={item.favUrl} alt="" />
                  </Box>
                </Box>
              </Box>
              <Text mt="7px" textAlign="center" fontSize="13px" color="#000">
                {item.name}
              </Text>
            </Box>
          </a>
        ))}
        <Box
          _hover={{ bgColor: "rgba(32, 33, 36, .1)", cursor: "pointer" }}
          w="112px"
          h="112px"
          borderRadius="4px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          onClick={showAddTag}
        >
          <Box
            w="48px"
            h="48px"
            mx="auto"
            bgColor="rgba(241, 243, 244, 1)"
            borderRadius="50%"
          >
            <Box fontSize="30px" textAlign="center" w="48px" h="48px">
              +
            </Box>
          </Box>
          <Text mt="7px" textAlign="center" fontSize="13px" color="#000">
            添加快捷方式
          </Text>
        </Box>
      </Flex>
      <AddTag ref={addTag} changeTag={handleAddTag} />
    </>
  );
}
