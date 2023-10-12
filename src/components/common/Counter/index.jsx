import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

const styles = {
    display: 'flex',
    alignItems: 'stretch',

    '.MuiTypography-root': {
        border: '1px solid #e6e8eb',
        fontWeight: 'bold',
        mx: '-1px',
        fontSize: 21,
        px: 2,
    },
    button: {
        borderColor: '#e6e8eb'
    },
    'button:nth-of-type(1)': {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    'button:nth-of-type(2)': {
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
}

export default function Counter({ count, setCount }) {
    
    const handleAdd = () => {
        setCount(prev => prev + 1)
    }
    const handleMinus = () => {
        setCount( prev => Math.max(
            1,
            prev - 1
        ))
    }

    return (
        <Box sx={styles}>
            <Button variant="outlined" onClick={handleMinus}>-</Button>
            <Typography>{count}</Typography>
            <Button variant="outlined" onClick={handleAdd}>+</Button>
        </Box>
    )
}