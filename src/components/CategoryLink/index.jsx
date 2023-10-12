import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Typography from '@mui/material/Typography'
import Chip from 'components/common/Chip'

/** @type {import("@mui/material").SxProps} */
const styles = {
    cursor: 'pointer',
    gap: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    svg: {
        transition: '0.3s ease-in-out',
        color: '#848e9f'
    },
    h5: {
        transition: '0.3s ease-in-out',
    },
    ':hover': {
        '.MuiChip-outlined': {
            bgcolor: 'primary.main', 
            color: 'white',
            borderColor: 'primary.main'                 
        },
        h5: {
            color: 'primary.main'
        },
        svg: {
            color: 'primary.main'
        },
    },

    category: {
        gap: 1,
        display: 'flex',
        alignItems: 'center'
    }
}

/** @type {import("@mui/material").SxProps} */
const style2 = (count) => count ? null : ({
    bgcolor: 'white',
    height: 65,
    alignItems: 'center',
    borderRadius: '8px 8px 0 8px',
    boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.05)',
    transition: 'all 300ms ease-in-out',
    px: 3,

    ':hover': {
        svg: {
            color: 'primary.main'
        }
    }
})

const CategoryLink = ({item}) => (
    <Stack component={Link} to={item.to} sx={{...styles, ...style2(item.count) }}>
        <Box sx={styles.category}>
            <DoubleArrowIcon /> <Typography>{item.label}</Typography>
        </Box>
          {item.count && <Chip label={item.count} variant='outlined' />}
    </Stack>
)

export default CategoryLink