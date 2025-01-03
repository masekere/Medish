import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Link } from 'react-router-dom'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import RemoveIcon from '@mui/icons-material/Remove';
import Typography from '@mui/material/Typography'
import Chip from 'components/common/Chip'
import { styled } from '@mui/material';
import PropTypes from 'prop-types'

const LinkContainer = styled(Stack)(({ count, theme }) => {
    const { palette: { primary } } = theme

    const style2 = count ? null : {
        backgroundColor: 'white',
        height: 65,
        alignItems: 'center',
        borderRadius: '8px 8px 0 8px',
        boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.05)',
        transition: 'all 300ms ease-in-out',
        padding: '0 24px',
    }

    return {
        cursor: 'pointer',
        gap: 8,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',

        svg: {
            transition: '0.3s ease-in-out',
            color: '#848e9f'
        },
        ':hover': {
            '.MuiTypography-root': {
                color: primary.main
            },
            '.MuiChip-outlined': {
                backgroundColor: primary.main,
                color: 'white',
                borderColor: primary.main
            },
            svg: {
                color: primary.main
            },
        },

        category: {
            gap: 8,
            display: 'flex',
            alignItems: 'center'
        },

        ...style2
    }
});

const styles = {
    gap: 1,
    display: 'flex',
    alignItems: 'center'
}

const CategoryLink = ({ item }) => (
    <LinkContainer count={item.count} component={Link} to={item.url}>
        <Box sx={styles}>
            {item.count ? <RemoveIcon /> : <DoubleArrowIcon />} <Typography>{item.category}</Typography>
        </Box>
        {item.count && <Chip label={item.count} variant='outlined' />}
    </LinkContainer>
)

CategoryLink.propTypes = {
  item: PropTypes.object
}

export default CategoryLink