import React from "react";
import { MyFooter } from "./footer";
import { MyHeader } from "./header";
import { AppShell } from "@mantine/core";

export function NavbarFooterShell({
    children,
    navbar = undefined
}: {
    children: React.ReactNode;
    navbar?: React.ReactElement
}) {
    return (
        <AppShell padding={0} header={<MyHeader />} navbar={navbar}>
            {children}
            <MyFooter />
        </AppShell>
    )
}