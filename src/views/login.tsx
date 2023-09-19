import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Image, Box, TextInput, Button, Text, Divider } from '@mantine/core'
export function Component() {
  return (
    <div className='mt-2 w-96 mx-auto'>
      <Image mx="auto" width={200} height={60} src="/images/amazon.svg" alt="amazon logo" />
      <LoginBox />
    </div>
  );
}

function LoginBox() {
  const navigate = useNavigate()
  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        marginTop: '10px',
        border: "1px solid grey",
        cursor: 'pointer',
      })}
    >
      <div>
        <div className='text-3xl mb-4'>Sign in</div>
        <TextInput label="Enter the mobile phone number or email" />
        <TextInput label="Password" />
        <div className='mt-3'>
          <Button variant='filled' className='w-full'>Continue</Button>
        </div>
        <Text size='xs' className='mt-3 mb-4'>By Continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</Text>
      </div>
      <Divider label="New to Amazon?" labelPosition='center' />
      <Button variant='default' className='w-full mt-2' onClick={() => { navigate('/signup') }}>Create New Amazon Account</Button>
    </Box>
  );
}