import React from 'react'
import { Box } from 'reflexbox';
import { useStyles } from "./styles";

function Wrapper({children}) {
    const classes = useStyles();
    return (
        <Box className={classes.root} mx="auto" >
            {children}
        </Box>
    )
}

export default Wrapper
