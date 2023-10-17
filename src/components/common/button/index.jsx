import { ArrowForward, Remove } from '@mui/icons-material';
import MuiButton from '@mui/material/Button'
import { useState } from 'react';
import containedStyles from 'components/common/button/contained'
import { useMediaQuery } from '@mui/material';
import PropTypes from 'prop-types'
  
export default function Button({ variant, children, sx, icon, ...other }) {
    const [onHover, setHover] = useState(false);
    const lg = useMediaQuery('@media (min-width: 992px)');

    const variants = {
        ...containedStyles
    }

    const ButtonIcon = () => onHover ? <ArrowForward /> : <Remove />

    return (
        <MuiButton
            className='Button'
            size={'large'}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            variant={variants[variant].variant}
            sx={{ ...variants[variant]?.style, ...sx }}
            color={variants[variant].color}
            startIcon={icon === 'start' ? <ButtonIcon /> : null}
            endIcon={icon === 'end' ? <ButtonIcon /> : null}
            {...other}>
            {children}
        </MuiButton>
    )
}

Button.defaultProps = {
  variant: 'cp',
  icon: 'end'
}

Button.propTypes = {
  variant: PropTypes.oneOf(['cp', 'cs', 'cw', 'co', 'tp', 'ts']),
  children: PropTypes.node,
  icon: PropTypes.string.isRequired,
  sx: PropTypes.object,
}