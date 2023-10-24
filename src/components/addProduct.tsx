import React from 'react';
import { Box, TextInput, Button, Text, Divider } from '@mantine/core';
import { useForm } from '@mantine/form';

export function Component() {
    const form = useForm({
        initialValues: { email: '', password: '' },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) =>
                value.length === 0 ? 'Password cannot be empty' : null,
        },
    });
    return (
        <div className="mt-2 w-full mx-auto">
            <Box
                sx={(theme) => ({
                    padding: theme.spacing.xl,
                    borderRadius: theme.radius.md,
                    marginTop: '10px',
                    border: '1px solid grey',
                    cursor: 'pointer',
                })}
            >
                <div>
                    <div className="text-3xl mb-4">Add Product</div>
                    <form>
                        <TextInput
                            label="Enter the mobile phone number or email"
                            {...form.getInputProps('email')}
                        />
                        <TextInput label="Password" {...form.getInputProps('password')} />
                        <div className="mt-3">
                            <Button type="submit" variant="filled" className="w-full">
                                Continue
                            </Button>
                        </div>
                    </form>
                    <Text size="xs" className="mt-3 mb-4">
                        By Continuing, you agree to Amazon's Conditions of Use and Privacy
                        Notice.
                    </Text>
                </div>
                <Divider label="New to Amazon?" labelPosition="center" />
                <Button
                    variant="default"
                    className="w-full mt-2"
                >
                    Create New Amazon Account
                </Button>
            </Box>
        </div>
    );
}
