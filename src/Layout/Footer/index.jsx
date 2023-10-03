import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Copyright from './components/Copyright'
import Links from './components/Links'
import Contact from './components/Contact'
import Newletter from './components/Newsletter'

/** @type {import("@mui/material").SxProps} */
const styles = {
    main: {
        '.links': {
            width: 180,
            a: {
                display: 'block',
                mb: 1,
                color: '#788fc8 !important',
                ':hover': {
                    color: '#13c5dd !important',
                }
            }
        },
        '@media (max-width: 945px)': {
            '.links': {
                display: 'flex',
                width: '100%',
                flexWrap: 'wrap',
                a: {
                    mr: 3
                },
                '.header': {
                    mb: 1,
                    pr: '100%',
                }
            }
        },
        svg: {
            verticalAlign: 'middle'
        },
    },
    divider: {
        borderColor: '#ffffff20',
        my: 4,
    },
}

export default function Footer() {
    return (
        <Box sx={styles.main} bgcolor={'secondary.main'} component={'section'}>
            <Container maxWidth="xxl">
                <Box flexWrap={'wrap'} gap={2} display={'flex'}>
                    <Contact />
                    <Links />
                    <Newletter />
                </Box>
                <Divider sx={styles.divider} />
                <Copyright />
            </Container>
        </Box>
    )
}