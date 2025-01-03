import { styled, Divider, Rating } from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
const Product = 'https://ucarecdn.com/be7d331b-b539-453e-976a-0761f5c49840/assets_images_shop_full_1.jpg';
import Chip from 'components/common/Chip'
import { Link } from 'react-router-dom'
import Counter from 'components/common/Counter'
import Button from 'components/common/button'
import { useState } from 'react'
import SocialMediaBlock from 'components/common/SocialMediaBlock'
import Tags from 'components/Tags'

const ProductContainer = styled(Box)({
    display: 'flex',
    gap: 16,
    marginBottom: 64,

    '@media (max-width: 991px)': {
        flexDirection: 'column'
    }
})

const content = {
    h3: 'Green Tea',
    rating: 4,
    reviews: {
        info: '5 Review(S)',
        action: 'Add Review',
        url: '#'
    },
    price: 15.00,
    desc: 'EGCG is one of the most powerful compounds in green tea. Research has tested its ability to help treat various diseases. It appears to be one of the main compounds that gives green tea its medicinal properties (2',
    action: 'add to cart',
    sku: {
        name: 'SKU',
        value: '002',
        url: '#',
    },
    categories: {
        name: 'Categories',
        categories: [
            {
                name: 'Vitamins',
                url: '#'
            },
            {
                name: 'Glucose',
                url: '#'
            },
        ]
    },
    Tags: {
        h5: 'Tags',
        tags: [
            {
                name: 'Beauty',
                url: '#'
            },
            {
                name: 'Suppliments',
                url: '#'
            },
        ]
    },
    social: [
        {
            icon: <FacebookIcon />,
            url: "#",
            color: 'rgb(72 109 181)'
        },
        {
            icon: <InstagramIcon />,
            url: "",
            color: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
        },
        {
            icon: <TwitterIcon />,
            url: "#",
            color: 'rgb(39 164 243)'
        },
    ]

}



export default function SingleProduct() {
    const [count, setCount] = useState(1)

    return (
        <ProductContainer>
            <Box width={{lg: '50%'}} >           
                <Box  width={'100%'}  component="img" src={Product} alt={'product name'} />
            </Box>
            <Stack width={{lg: '50%'}} spacing={2}>
                <Typography variant='h3'>{content.h3}</Typography>
                <Box gap={3} display={'flex'}>
                  <Rating name="rating" value={content.rating} />
                  <Box display={'flex'} gap={1}>
                    <Typography component="legend">{content.reviews.info}</Typography>
                    <Typography>/</Typography>
                    <Typography  component={Link} to={content.reviews.url}>{content.reviews.action}</Typography>
                  </Box>
                </Box>
                <Typography color={'primary'} fontWeight={700} fontSize={22}>${content.price}.00</Typography>
                <Typography>{content.desc}</Typography>
                <Box gap={1} display={'flex'}>
                    <Counter count={count} setCount={setCount} />
                    <Button variant={'cs'}>{content.action}</Button>
                </Box>
                <Stack
                    pt={3}
                    spacing={2}
                    divider={<Divider />}
                >
                    <Box justifyContent={'space-between'} display={'flex'} >
                        <Typography flex={1} fontWeight={500} >{content.sku.name}</Typography>
                        <Typography flex={1}>{content.sku.value}</Typography>
                    </Box>
                    <Box display={'flex'} >
                        <Typography flex={1} fontWeight={500} >{content.categories.name}</Typography>
                        <Stack flex={1}
                            direction="row"
                            spacing={1}
                            divider={<>,</>}
                        >
                            {content.categories.categories.map((item, index) => (
                                <Typography component={Link} to={item.url} key={index}>{item.name}</Typography>
                            ))}
                        </Stack>
                    </Box>
                    <Box display={'flex'} >
                        <Typography flex={1} fontWeight={500} >{content.Tags.h5}</Typography>
                        <Stack flex={1}
                            direction="row"
                            spacing={1}
                            divider={<>,</>}
                        >
                            {content.Tags.tags.map((item, index) => (
                                <Typography component={Link} to={item.url} key={index}>{item.name}</Typography>
                            ))}
                        </Stack>
                    </Box>
                </Stack>
                {/* <Tags items={content.Tags} /> */}
                <SocialMediaBlock items={content.social} />
            </Stack>


        </ProductContainer>
    )
}