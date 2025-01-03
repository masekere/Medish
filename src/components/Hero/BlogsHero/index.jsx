import Breadcrumbs from "components/common/Breadcrumbs";
import HeroContainer from "components/Hero/HeroContainer";
const Bg = 'https://ucarecdn.com/01047dbf-f05e-4336-92f6-4596a286feb1/assets_images_pagetitles_7.jpg';
import Typography from '@mui/material/Typography'

const content = {
    h1: 'Our Blog',
    breadcrumbs: [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'Doctors',
            url: '/doctors'
        },
        {
            name: 'Blog',
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
   backgroundPosition: 'center 10%',

    '.Breadcrumbs': {
        position: 'relative'
    }
}

export default function BlogsHero() {
  return (
    <HeroContainer sx={styles}  src={Bg}>
        <Breadcrumbs items={content.breadcrumbs} />
        <Typography variant="h1">{content.h1}</Typography>
    </HeroContainer>
  )
}