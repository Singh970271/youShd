import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import {useNavigate,useLocation} from "react-router-dom";
import { useSelector } from 'react-redux'; 
//import { loginFailure, loginLoading, loginSuccess } from '../redux/action';
import { saveData } from '../utils/localStorage';
import { loginFailure, loginLoading, loginSuccess } from '../redux/auth/action';

  export  function Login() {
    const loading = useSelector((state)=>state.auth.isLoading);
    const token = useSelector((state)=>state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const[info,setInfo]= useState({
        email:"",
    //  username:"",
      password:""
    });
    
    const login = (e)=>{
      let{name,value}=e.target;
      setInfo({...info,[name]:value})
    }
    console.log(info);

    const userLogin = () =>{
      dispatch(loginLoading());
      axios.post("https://masai-api-mocker.herokuapp.com/auth/login",{
          username:info.email,
          password:info.password
      }).then((r)=>{
          console.log(r);
         
         saveData("user_",info.email)
          dispatch(loginSuccess(r.data))
          
      })
      .catch((e)=>dispatch(loginFailure()));
    }
    useEffect(() => {
      if (token) {
        // console.log(location?.state?.pathanme);
        navigate(location?.state?.pathname || `/`, { replace: true });
      }
    }, [navigate, token]);
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('red.50', 'red.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}> Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="username">
                <FormLabel>Username</FormLabel>
                <Input type="text"  name={'username'} value={info.email} onChange={login}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  name={'password'} value={info.password} onChange={login} />
              </FormControl>
              <Stack spacing={10}>
                <Button
                onClick={userLogin}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  {loading?"Loading...":"Login"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }