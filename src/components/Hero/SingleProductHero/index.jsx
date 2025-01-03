import Box from '@mui/material/Box'
import Breadcrumbs from 'components/common/Breadcrumbs'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'



/** @type {import("@mui/material").SxProps} */
const styles = {
    position: 'relative',
    alignItems: 'left',
    mt: 5,

    h1: {
        color: 'text.secondary'
    },
    '.Breadcrumbs': {
        position: 'relative',

        a: {
            color: 'rgba(0, 0, 0, 0.6) !important',

            ':hover': {
                color: '#13c5dd !important'
            }
        },

        svg: {
            color: 'text.secondary'
        }
    },
}

const content = {
    h1: 'Product Details',
    breadcrumbs: [
        {
            name: 'home',
            url: '/'
        },
        {
            name: 'shop',
            url: '/shop'
        },
        {
            name: 'product name',
            url: '#'
        },
    ],
}

const SingleProductHero = () => (
    <Stack sx={styles}>
        {/* <Typography variant='h1'>{content.h1}</Typography> */}
      <Breadcrumbs items={content.breadcrumbs} />
    </Stack>
)

export default SingleProductHero