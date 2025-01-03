import Breadcrumbs from "components/common/Breadcrumbs";
import HeroContainer from "components/Hero/HeroContainer";
const Bg = 'https://ucarecdn.com/b80b7e45-eac5-425f-b798-e32f88b5f4eb/assets_images_pagetitles_1.jpg';
import Typography from '@mui/material/Typography'

const content = {
    h1: 'Checkout',
    breadcrumbs: [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Checkout',
            url: '#'
        },
    ]
}

/** @type {import("@mui/material").SxProps} */
const styles = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   textAlign: 'center',
   backgroundPosition: 'center center',

    '.Breadcrumbs': {
        position: 'relative'
    }
}

export default function CheckoutHero() {
  return (
    <HeroContainer sx={styles}  src={Bg}>
        <Breadcrumbs items={content.breadcrumbs} />
        <Typography variant="h1">{content.h1}</Typography>
    </HeroContainer>
  )
}