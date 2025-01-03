import Breadcrumbs from "components/common/Breadcrumbs";
import HeroContainer from "components/Hero/HeroContainer";
const Bg = 'https://ucarecdn.com/4c28715b-52a7-4330-8b87-220d93b61d8f/assets_images_pagetitles_3.jpg';
import Typography from '@mui/material/Typography'

const content = {
    h1: 'Frequently Asked Questions',
    breadcrumbs: [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'FAQ',
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

    '.Breadcrumbs': {
        position: 'relative'
    }
}

export default function FAQHero() {
  return (
    <HeroContainer sx={styles}  src={Bg}>
        <Breadcrumbs items={content.breadcrumbs} />
        <Typography variant="h1">{content.h1}</Typography>
    </HeroContainer>
  )
}