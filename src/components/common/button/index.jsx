import { ArrowForward, Remove } from '@mui/icons-material';
import MuiButton from '@mui/material/Button'
import { useState } from 'react';
import containedStyles from 'components/common/button/contained'
import textStyles from 'components/common/button/text'
import { useMediaQuery } from '@mui/material';

export default function Button({ variant = 'cp', children, sx, icon = 'end', ...other }) {
    const [onHover, setHover] = useState(false);
    const lg = useMediaQuery('@media (min-width: 992px)');

    const variants = {
        ...containedStyles,
        ...textStyles
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