import { styled } from '@mui/material';
import MuiChip from '@mui/material/Chip'

const Chip = styled(MuiChip)(({ theme }) => {
    const {palette: {primary, secondary}} = theme

    return {
        borderRadius: '8px 8px 0 8px',
        cursor: 'pointer',

        '&.MuiChip-outlined': {
            transition: '0.3s ease-in-out',
            backgroundColor: 'white',
            color: primary.main,
            borderColor: '#e6e8eb',

            ':hover': {
                backgroundColor: primary.main,
                color: 'white !important',
                borderColor: primary.main,
            }
        },
        '&.MuiChip-filled': {
            color: 'white',
            backgroundColor: secondary.light,

            span: {
                fontSize: 15,
                fontWeight: 600,
            }
        },
        '&.MuiChip-icon': {
            color: 'white !important',
            // backgroundColor: secondary.light + '!important',
            height: 'auto',
            transition: '0.3s ease-in-out',

            span: {
                fontWeight: 600,
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '.5rem',
            },
            svg: {
                fontSize: 30
            },

            ':hover':{
                backgroundColor: primary.main + '!important'
            }
        },
    
    }
});

export default Chip