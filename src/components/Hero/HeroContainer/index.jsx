import Box from '@mui/material/Box'

export default function HeroContainer({ src, sx, children, other }) {
    return (
        <Box
            className='Hero'
            sx={{
                position: 'relative',
                background: `linear-gradient(0deg, rgba(0, 35, 82, 0.6), rgba(0, 35, 82, 0.1)), url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '8rem' },
                button: {
                    height: 60
                },
                ...sx
            }}
            component={'section'}
            {...other}
        >
            {children}
        </Box>
    )
}
