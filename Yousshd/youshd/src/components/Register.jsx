import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useSelector } from 'react-redux';
  import { useDispatch } from 'react-redux/es/exports';
  import { Link } from 'react-router-dom';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {useNavigate} from "react-router-dom";
 // import {registerFailure, registerLoading, registerSuccess } from '../redux/action';
  import axios from 'axios';
import { registerFailure, registerLoading, registerSuccess } from '../redux/auth/action';
  export  function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const loading = useSelector((state)=>state.auth.isLoading);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const[info,setInfo]=useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        
    });
    const register = (e)=>{
      let{name,value} = e.target;
      setInfo({...info,[name]:value});
      console.log(info);
    }


    const userRegister = ()=>{
      console.log('working')
      dispatch(registerLoading());
      axios.post('https://masai-api-mocker.herokuapp.com/auth/register',info)
      .then((r)=>{
        console.log(r);
        dispatch(registerSuccess(r));
        navigate("/login");
      })
      .catch((e)=>{
        console.log(e)
        dispatch(registerFailure(e))
  
      })
    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
       
        bg={useColorModeValue('red.50', 'red.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" name='name' value={info.name} onChange={register}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="mobile">
                    <FormLabel>Mobile</FormLabel>
                    <Input type="text" name='mobile' value={info.mobile} onChange={register}/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input type="text" name='username' value={info.username} onChange={register}/>
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={info.email} onChange={register}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name='password' value={info.password} onChange={register} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                 onClick={userRegister}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                 {loading?"Loading...":"Register"}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'} color={'blue.400'}>
                  <Text as={'span'} color={'black'} >Already a user?</Text> <Link to='/login'>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }