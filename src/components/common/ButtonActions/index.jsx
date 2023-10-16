import { styled } from '@mui/material'
import Stack from '@mui/material/Stack'

const ButtonActions = styled(Stack)(({ theme }) => ({
    display: 'flex',
    gap: 16,
    alignItems: 'center',

    [theme.breakpoints.up('sm')]: {
        flexDirection: 'row'
    },

    button: {
        height: 60,
    }
}));

export default ButtonActions