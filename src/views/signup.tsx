import React from 'react';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import {
    Image,
    Box,
    TextInput,
    PasswordInput,
    Text,
    Button,
    Divider,
} from '@mantine/core';
import { userCreate } from '../services/user';

export function Component() {
    return (
        <div className="mt-2 w-96 mx-auto">
            <Image
                mx="auto"
                width={200}
                height={60}
                src="/images/amazon.svg"
                alt="amazon logo"
            />
            <SignUpBox />
        </div>
    );
}

function SignUpBox() {
    const navigate = useNavigate();
    const form = useForm({
        initialValues: { name: '', email: '', phone: '', password: '' },
        validate: {
            name: (value) =>
                value.length < 2 ? 'Name must have at least 2 letters' : null,
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) =>
                value.length < 5 ? 'Password Must be at least of Length 5' : null,
        },
    });

    const handleSubmit = async () => {
        console.log(form.values);
        const values = form.values;
        const res = await userCreate({
            name: values?.name || '',
            email: values?.email,
            mobile: values?.phone || '',
            password: values?.password,
        });
        if (res.status === 200) {
            localStorage.setItem('token', res?.data?.authToken);
            localStorage.setItem('user', JSON.stringify(res?.data?.user))
            navigate('/dashboard');
            console.log('user created success full');
        } else {
            console.log('error');
        }
    };

    return (
        <Box
            sx={(theme) => ({
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                marginTop: '10px',
                border: '1px solid gray',
                cursor: 'pointer',
            })}
        >
            <div>
                <div className="text-3xl mb-4"> Create Account</div>
                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <TextInput
                        name="name"
                        label="Your name"
                        placeholder="First and last name"
                        className="mb-2"
                        {...form.getInputProps('name')}
                    />
                    <TextInput
                        name="phone"
                        label="Mobile number"
                        placeholder="Mobile Number"
                        className="mb-2"
                    />
                    <TextInput
                        name="email"
                        label="Email(optional)"
                        className="mb-2"
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
                        name="password"
                        label="Password"
                        placeholder="At least 5 characters"
                        className="mb-2"
                        {...form.getInputProps('password')}
                    />
                    <Text size="sm" className="mb-2">
                        To verify your number, we will send you a text message with a
                        temporary code. Message and data rates may apply.
                    </Text>
                    <Button type="submit" variant="filled" className="w-full mt-3">
                        Continue
                    </Button>
                </form>
                <Divider my="md" />
                <Text size="sm">
                    Already have an account?{' '}
                    <Text
                        component="a"
                        c="blue"
                        onClick={() => {
                            navigate('/login');
                        }}
                    >
                        Sign in
                    </Text>
                </Text>
            </div>
        </Box>
    );
}
