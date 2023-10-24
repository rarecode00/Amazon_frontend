import React from "react"
import { SimpleGrid } from '@mantine/core'
export function MyFooter() {
    return (
        <>
            <SimpleGrid cols={4} verticalSpacing="xs" className="pt-10 pb-6 bg-footer text-white">
                <div className="mx-auto w-fit">
                    <div className="font-semibold">Get to Know Us</div>
                    <div className="flex flex-col text-sm">
                        <a href="/" className="no-underline hover:underline text-white">About Us</a>
                        <a href="/" className="no-underline hover:underline text-white">Carrers</a>
                        <a href="/" className="no-underline hover:underline text-white">Press Release</a>
                        <a href="/" className="no-underline hover:underline text-white">Amazon Science</a>
                    </div>
                </div>
                <div className="mx-auto w-fit">
                    <div className="font-semibold">Connect with Us</div>
                    <div className="flex flex-col text-sm">
                        <a href="/" className="no-underline hover:underline text-white">Facebook</a>
                        <a href="/" className="no-underline hover:underline text-white">Twitter</a>
                        <a href="/" className="no-underline hover:underline text-white">Instagram</a>
                    </div>
                </div>
                <div className="mx-auto w-fit">
                    <div className="font-semibold">Make Money with Us</div>
                    <div className="flex flex-col text-sm">
                        <a href="/" className="no-underline hover:underline text-white">Sell on Amazon</a>
                        <a href="/" className="no-underline hover:underline text-white">Sell under Amazon Accelerator</a>
                        <a href="/" className="no-underline hover:underline text-white">Become an Affiliate</a>
                    </div>
                </div>
                <div className="mx-auto w-fit">
                    <div className="font-semibold">Let Us Help You</div>
                    <div className="flex flex-col text-sm">
                        <a href="/" className="no-underline hover:underline text-white">COVID-19 and Amazon</a>
                        <a href="/" className="no-underline hover:underline text-white">Your Account</a>
                        <a href="/" className="no-underline hover:underline text-white">Returns Center</a>
                        <a href="/" className="no-underline hover:underline text-white">Help</a>
                    </div>
                </div>
            </SimpleGrid >
        </>
    )
}