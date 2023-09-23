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
            <div className="mt-2 flex">
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
                    color="orange"
                    className="ml-4"
                >
                    Select Address
                </Button>
            </div>
            <Select
                className="mt-2 ml-4 w-2/5"
                rightSection={
                    // className = "bg-lightOrange w-full h-9 rounded-r-md"
                    <div className="bg-lightOrange w-full h-9 rounded-r-md">
                        <IconSearch className='mt-1 ml-1' />
                    </div>
                }
                placeholder="search Amazon.in"
                data={genderOptions}
            />
        </div>
    );
}
