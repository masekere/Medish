import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from 'components/common/button'



/** @type {import("@mui/material").SxProps} */
const styles = {
    main: {
        position: 'relative',
        border: '.5px solid #e6e8eb',
        p: '56px 50px 54px',
        width: {xs: '100%', md: 'calc(100%/2)'},
        transition: '0.1s ease-in-out',
        textAlign: {xs: 'center', lg: 'left'},

        svg: {
            fontSize: 70,
            
        },
        button: {
            color: 'text.secondary',

            ':hover': {
                color: 'white'
            }
        },

        '.num': {
            transition: '0.3s ease-in-out',
            mb: 3,
            fontWeight: '550',
            color: '#e6e8eb',  
            fontSize: 30,

        },

        ':hover': {
            boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.15)',

            '.num': {
                color: 'primary.main'
            }
        },
    }
}

const ProcessCard = ({ item }) => (
    <Box className='processcard' sx={styles.main}>
        <Typography className='num'>{item.number}</Typography>
        <Box display={{xs: 'block', lg:'flex'}} gap={3}>
            {item.icon}
            <Box>
                <Typography mb={2} variant='h5'>{item.h5}</Typography>
                <Typography maxWidth={{lg: 300}} mb={4}>{item.desc}</Typography>
                <Button icon='none' variant='co'>{item.action}</Button>
            </Box>
        </Box>
    </Box>
)

export default ProcessCard