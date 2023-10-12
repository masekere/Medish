import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Product1 from "assets/images/shop/thumb/1.jpg"
import Product2 from "assets/images/shop/thumb/2.jpg"
import Product3 from "assets/images/shop/thumb/3.jpg"
import CardContainer from 'components/Cards/CardContainer'

const content = {
  h5: 'Products',
  products: [
    {
      img: Product1,
      title: 'Calming Herps',
      price: '$10.00'
    },
    {
      img: Product2,
      title: 'Goji Powder',
      price: '$19.00'
    },
    {
      img: Product1,
      title: 'Biotin Complex',
      price: '$25.00'
    },
  ]
}

/** @type {import("@mui/material").SxProps} */
const styles = {
    bgcolor: 'primary.light',

    img: {
        width: 80,
        height: 80
    }
}

const Products = () => (
    <CardContainer sx={styles}>
        <Typography mb={3} variant='h5'>{content.h5}</Typography>
        <Stack spacing={1.5}>
            {content.products.map((item, index) => (
                <Box sx={{cursor: 'pointer'}} key={index} display={'flex'} gap={2}>
                    <Box>
                        <Box borderRadius={'8px 0 8px 8px'} component="img" src={item.img} alt={item.title} />
                    </Box>
                    <Stack spacing={.5}>
                      <Typography color={'secondary.light'}>{item.title}</Typography>
                      <Typography variant='body2' color={'primary'}>{item.price}</Typography>
                    </Stack>
                </Box>
            ))}
        </Stack>
    </CardContainer>
)

export default Products

