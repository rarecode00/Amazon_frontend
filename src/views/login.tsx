import React from 'react'
import {Image , Box} from '@mantine/core'
export function Component(){
    return (
        <div className='mt-2 w-96 mx-auto'>        
        <Image mx="auto" width={200} height={60} src="/images/amazon.svg" alt="amazon logo" />
        <LoginBox/>
        </div>
    );
}

function LoginBox(){
    return (
        <Box
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            textAlign: 'center',
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            marginTop: '10px',
            border: "1px solid grey",
            cursor: 'pointer',
    
            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            },
          })}
        >
          Box lets you add inline styles with sx prop
        </Box>
      );
}