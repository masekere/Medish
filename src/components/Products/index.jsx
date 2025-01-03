import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
const Product1 = 'https://ucarecdn.com/00e7bb06-011d-4899-baa5-9b070b817fb1/assets_images_shop_thumb_1.jpg';
const Product2 = 'https://ucarecdn.com/d2dd057e-2059-490d-a1d2-a3a7ef944c5f/assets_images_shop_thumb_2.jpg';
const Product3 = 'https://ucarecdn.com/a16c7974-84e0-45c1-8637-f9bf32cc0876/assets_images_shop_thumb_3.jpg';
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

