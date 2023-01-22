import { ReactNode } from 'react';
//import style from './Navbar.module.css';
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  styled,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

export default function Navbar() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box   bg={'#23244D'} px={5} py={4} margin-top={60} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton                 
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading>
               <Link to='/'><Text color={'white'}>Logo</Text></Link>
              </Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
             <Link to='/'><Text color={'white'} fontWeight={'bold'}>Home</Text></Link>
             <Link to='/login'><Text color={'white'} fontWeight={'bold'}>Login</Text></Link>
             <Link to='/register'><Text color={'white'} fontWeight={'bold'}>Register</Text></Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              bg={'pink.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              mr={'10px'}
             >
                 <Link to='/register'><Text color={'white'}>  My Account</Text></Link>
            
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={1}>
                <Avatar
                  size={'sm'}
                  src={
                    ''
                  }
                />
              </MenuButton>
              <MenuList color={'red'} bg={'#23242D'} _hover={{color:'black'}}>
                
                {/* <MenuDivider /> */}
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {/* {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
             <Link to='/todo'><Text color={'white'}>Todo</Text></Link>
             <Link to='/bmi'><Text color={'white'}>Bmi</Text></Link>
             <Link to='/chat'><Text color={'white'}>Chat</Text></Link>
            </Stack>
          </Box>
        ) : null} */}

      </Box>
    </>
  );
}





