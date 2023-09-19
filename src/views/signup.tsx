import React from "react"
import { useNavigate } from 'react-router-dom'
import { Image, Box, TextInput, PasswordInput, Text, Button, Divider } from "@mantine/core";
export function Component() {
    return (
        <div className='mt-2 w-96 mx-auto'>
            <Image mx="auto" width={200} height={60} src="/images/amazon.svg" alt="amazon logo" />
            <SignUpBox />
        </div>
    );
}

function SignUpBox() {
    const navigate = useNavigate()
    return (
        <Box
            sx={(theme) => ({
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                marginTop: '10px',
                border: "1px solid gray",
                cursor: 'pointer',
            })}
        >
            <div>
                <div className='text-3xl mb-4'> Create Account</div>
                <TextInput label="Your name" placeholder="First and last name" className="mb-2" />
                <TextInput label="Mobile number" placeholder="Mobile Number" className="mb-2" />
                <TextInput label="Email(optional)" className="mb-2" />
                <PasswordInput label="Password" placeholder="At least 6 characters" className="mb-2" />
                <Text size='sm' className="mb-2">To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</Text>
                <Button variant='filled' className='w-full mt-3'>Continue</Button>
                <Divider my="md" />
                <Text size="sm">Already have an account? <Text component="a" c="blue" onClick={() => { navigate('/login') }}>Sign in</Text></Text>
            </div>
        </Box>
    );
}