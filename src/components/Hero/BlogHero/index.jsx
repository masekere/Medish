import Breadcrumbs from 'components/common/Breadcrumbs'
import Stack from '@mui/material/Stack'

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
    breadcrumbs: [
        {
            name: 'home',
            url: '/'
        },
        {
            name: 'blog',
            url: '/shop'
        },
        {
            name: '6 Tips To Protect Your Mental Health When You Are Sick',
            url: '#'
        },
    ],
}

const BlogHero = () => (
    <Stack sx={styles}>
      <Breadcrumbs items={content.breadcrumbs} />
    </Stack>
)

export default BlogHero