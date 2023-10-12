import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from 'components/common/Chip'

const styles = {
    width: { xs: '100%', xl: '50%' },
    p: '37px 40px 28px',
    borderRadius: '8px 8px 0 8px',
    bgcolor: '#f6f6f6',

    h6: {
        fontSize: 19,
        mb: 4
    }
}

const PriceListCard = ({ item }) => (
    <Box sx={styles}>
        <Typography variant='h6'>{item.h6}</Typography>
        <Stack
            spacing={1.5}
            divider={<Divider />}            
        >
                {item.prices.map((priceItem, index) => (
                    <Box key={index} display={'flex'} justifyContent={'space-between'}>              
                        <Typography>{priceItem.name}</Typography>
                        <Chip label={priceItem.price} />
                    </Box>
                ))}
        </Stack>
    </Box>
)

export default PriceListCard