import React from "react"
import { SimpleGrid } from '@mantine/core'
export function MyFooter() {
    return (
        <>
            <SimpleGrid cols={4} className="p-10 pl-16 bg-black text-white">
                <SimpleGrid>
                    <div>Get to Know Us</div>
                </SimpleGrid>
                <SimpleGrid>
                    <div>Connect with Us</div>
                </SimpleGrid>
                <SimpleGrid>
                    <div>Make Money with Us</div>
                </SimpleGrid>
                <SimpleGrid>
                    <div>Let Us Help You</div>
                </SimpleGrid>
            </SimpleGrid >
        </>
    )
}