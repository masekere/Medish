import Box from '@mui/material/Box'
// import { styled } from '@mui/material'
// import Box from '@mui/material/Box'

// const HeroSection = styled((props) => <Box component={'section'} {...props} />)(({ _, src }) => ({

// }));

// export default HeroSection
export default function Hero({ src, sx, children, other }) {
    return (
        <Box
            sx={{
                background: `linear-gradient(0deg, rgba(0, 35, 82, 0.6), rgba(0, 35, 82, 0.1)), url(${src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '8rem' },
                height: { xl: '100vh' },
                maxHeight: '400px',
                ...sx
            }}
            component={'section'}
            {...other}
        >
            {children}
        </Box>
    )
}

