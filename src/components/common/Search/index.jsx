import PropTypes from 'prop-types'
import { styled } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search'

const SearchComponent = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: 'auto',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
    },
}));

export default function Search({placeholder, ...props}) {
    return (
        <SearchComponent {...props}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                className='StyledInputBase'
                id='Search'
                placeholder={placeholder}
                inputProps={{ 'aria-label': 'search' }}
            />
        </SearchComponent>
    )
}

Search.defaultProps = {
  placeholder: 'Search...'
}

Search.propTypes = {
  placeholder: PropTypes.string
}