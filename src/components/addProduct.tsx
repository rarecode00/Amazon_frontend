import React from 'react';
import { Box, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import { addProduct } from '../services/product';

export function Component() {
    const form = useForm({
        initialValues: { name: '', category: '', rating: '', price: '' },
        validate: {
            // email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            // password: (value) =>
            //     value.length === 0 ? 'Password cannot be empty' : null,
        },
    });

    const handleSubmit = async () => {
        const values = form.values;
        const res = await addProduct({ name: values.name, category: values.category, rating: values.rating, price: values.price })
        console.log(res)
    }

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
                    <form onSubmit={form.onSubmit(handleSubmit)}>
                        <TextInput
                            label="Enter the name of product"
                            {...form.getInputProps('name')}
                        />
                        <TextInput label="Category" {...form.getInputProps('category')} />
                        <TextInput label="Rating" {...form.getInputProps('rating')} />
                        <TextInput label="Price" {...form.getInputProps('price')} />

                        <div className="mt-3">
                            <Button type="submit" variant="filled" className="w-full">
                                Continue
                            </Button>
                        </div>
                    </form>
                </div>
            </Box>
        </div>
    );
}
