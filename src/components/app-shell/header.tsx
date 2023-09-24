import React from 'react';
import { Button, Image, Select } from '@mantine/core';
import { IconMapPin, IconSearch } from '@tabler/icons-react';
export function MyHeader() {
    const genderOptions = [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "undisclosed", label: "Undisclosed" },
    ];
    return (
        <div className="flex bg-black w-full h-13">
            {/* left header container */}
            <div className="mt-2 ml-4 flex">
                <Image
                    src="/images/amazon_nav.svg"
                    className=""
                    fit="contain"
                    width={110}
                    height={50}
                />
                <Button
                    variant="subtle"
                    leftIcon={<IconMapPin />}
                    color='dark'
                    className="ml-4 text-white font-bold"
                >
                    Select Address
                </Button>
            </div>
            <Select
                size='sm'
                className="mt-2 ml-4 w-5/12"
                rightSection={
                    // className = "bg-lightOrange w-full h-9 rounded-r-md"
                    <div className="bg-lightOrange w-full h-9 rounded-r-md">
                        <IconSearch className='mt-1 ml-1' />
                    </div>
                }
                placeholder="search Amazon.in"
                data={genderOptions}
            />

            <div className='ml-2 flex'>
                <Button variant='subtle' color='dark' leftIcon={<Image src='/images/india.svg' width={18} />} className='text-white mt-2'>En</Button>
                <Button variant='subtle' color='dark' className='text-white mt-2'>
                    <div className='flex-col'>
                        <label className='text-white font-normal'>Hello, sign in</label>
                        <div className='font-bold'>Accounts & Lists</div>
                    </div>
                </Button>
                <Button variant='subtle' color='dark' className='text-white mt-2'>
                    <div className='flex-col'>
                        <label className='text-white font-normal'>Returns</label>
                        <div className='font-bold'>& Orders</div>
                    </div>
                </Button>
                <Button variant='subtle' color='dark' className='text-white mt-2 pb-1' leftIcon={
                    <div className='flex-col'>
                        <div className='text-lightOrange text-sm font-semibold relative top-1 left-2'>0</div>
                        <Image src="/images/cart.svg" width={20} />
                    </div>
                }><div className='mt-5 font-bold'>Cart</div></Button>
            </div>

        </div >
    );
}
