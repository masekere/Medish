import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AdvantagesList from 'components/AdvantagesList'
import Divider from '@mui/material/Divider'
import Button from 'components/button'
import Stack from '@mui/material/Stack'


const content = {
    action: 'purchase now'
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    main: {
        p: '44px 50px 50px',
        boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.15)',
        bgcolor: 'white',
        width: '100%',
        maxWidth: 370,

        button: {
            height: 60
        },

        ':nth-of-type(1)': {
            // boxShadow: 'none',
            zIndex: 1,
        },
        ':nth-of-type(2)': {
            zIndex: 3
        },
        ':nth-of-type(3)': {
            // boxShadow: 'none',
            maxWidth: {md: 740, xl: 370},
            // bgcolor: 'secondary.main',
            zIndex: 2
        }
    }
}

const PriceCard = ({item}) => (
    <Stack sx={styles.main}>
      <Typography mb={2} fontWeight={'bold'} color={'primary'}>{item.name}</Typography>
      <Typography maxWidth={270} mb={7} variant='body2'>{item.desc}</Typography>
      <Box mb={3}>
        <AdvantagesList sx={{color: 'secondary.light'}} items={item.advantages} />
      </Box>
      <Divider sx={{mt: 'auto', mb: 4}} />
      <Typography mb={3}>
        <Typography color={'secondary.light'} fontSize={50} component={'span'}>{item.price}</Typography> / {item.duration}
      </Typography>
      <Button variant='cs'>{content.action}</Button>
    </Stack>
)

export default PriceCard