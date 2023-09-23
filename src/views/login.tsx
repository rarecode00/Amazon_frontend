import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '@mantine/form';
import { Image, Box, TextInput, Button, Text, Divider } from '@mantine/core'
import { userLogin } from '../services/user';

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
  const form = useForm({
    initialValues: { email: '', password: '' },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length === 0 ? "Password cannot be empty" : null)
    }
  })

  const handleSubmit = async () => {
    const values = form.values;
    const res = await userLogin({ email: values?.email, password: values?.password })
    if (res.status === 200) {
      localStorage.setItem('token', res.data?.authToken)
      localStorage.setItem('user', JSON.stringify(res.data?.user))
      navigate('/')
    } else {
      console.log('Error')
    }
  }

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
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput label="Enter the mobile phone number or email" {...form.getInputProps('email')} />
          <TextInput label="Password" {...form.getInputProps('password')} />
          <div className='mt-3'>
            <Button type='submit' variant='filled' className='w-full'>Continue</Button>
          </div>
        </form>
        <Text size='xs' className='mt-3 mb-4'>By Continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</Text>
      </div>
      <Divider label="New to Amazon?" labelPosition='center' />
      <Button variant='default' className='w-full mt-2' onClick={() => { navigate('/signup') }}>Create New Amazon Account</Button>
    </Box >
  );
}