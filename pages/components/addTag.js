import React, { useState, useImperativeHandle, forwardRef } from "react";
import { Box, Flex, Text, Input, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Bg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(1, 1, 1, 0.6);
`;
let index = 0
function AddTag(props, ref) {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({ name: "", address: "" });
  const handleAddress = (e) => {
    setInfo({ ...info, address: e.target.value });
  };
  const handleName = (e) => {
    setInfo({ ...info, name: e.target.value });
  };
  const handleAddTag = () => {
    const tagInfo = {
      ...info,
      address: /http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(info.address) ? info.address : 'https://' + info.address,
      id: index++,
      favUrl: /http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(info.address) ? info.address + "/favicon.ico" : 'https://' + info.address + "/favicon.ico",
    };
    setShow(false);
    props.changeTag(tagInfo);
    setInfo({ ...info, name: "", address: "" });
  };
  useImperativeHandle(ref, () => ({
    changeShow: () => {
      setShow(true);
    },
  }));
  return (
    show && (
      <Bg>
        <Box
          borderRadius="6px"
          w="500px"
          h="290px"
          mx="auto"
          mt="160px"
          bgColor="#fff"
          p="15px"
        >
          <Text fontSize="15px" color="#202124" mb="15px">
            添加快捷方式
          </Text>
          <Box h="63px">
            <Text fontSize="12px" color="#5F6368" mb="8px">
              名称
            </Text>
            <Input
              bgColor="rgba(241, 243, 244, 1)"
              h="27px"
              px="8px"
              py="6px"
              border="none"
              borderRadius="2px"
              _focus={{
                border: "none",
                boxShadow: "none",
                borderBottom: "1px solid blue",
              }}
              fontSize="12px"
              value={info.name}
              onChange={handleName}
            />
          </Box>
          <Box h="63px" mt="20px">
            <Text fontSize="12px" color="#5F6368" mb="8px">
              网址
            </Text>
            <Input
              bgColor="rgba(241, 243, 244, 1)"
              h="27px"
              px="8px"
              py="6px"
              border="none"
              borderRadius="2px"
              _focus={{
                border: "none",
                boxShadow: "none",
                borderBottom: "1px solid blue",
              }}
              fontSize="12px"
              value={info.address}
              onChange={handleAddress}
            />
          </Box>
          <Flex justifyContent="flex-end" mt="10px" h="72px" py="24px">
            <Button
              w="67px"
              h="32px"
              borderRadius="4px"
              mr="10px"
              fontSize="13px"
              color="#1A73E8"
              _focus={{ boxShadow: "none" }}
              onClick={() => {
                setShow(false);
              }}
            >
              取消
            </Button>
            <Button
              w="67px"
              h="32px"
              borderRadius="4px"
              fontSize="13px"
              disabled={!info.name || !info.address}
              _focus={{ boxShadow: "none" }}
              onClick={() => {
                handleAddTag();
              }}
            >
              完成
            </Button>
          </Flex>
        </Box>
      </Bg>
    )
  );
}
export default forwardRef(AddTag);
