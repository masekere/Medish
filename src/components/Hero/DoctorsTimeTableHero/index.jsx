import Breadcrumbs from "components/common/Breadcrumbs";
import HeroContainer from "components/Hero/HeroContainer";
const Bg = 'https://ucarecdn.com/7942565c-16be-4db4-b15f-e15c8d52df8a/assets_images_pagetitles_6.jpg';
import Typography from '@mui/material/Typography'

const content = {
    h1: 'Doctors Timetable',
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
            name: 'Doctors Timetable',
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

export default function DoctorsTimeTableHero() {
  return (
    <HeroContainer sx={styles}  src={Bg}>
        <Breadcrumbs items={content.breadcrumbs} />
        <Typography variant="h1">{content.h1}</Typography>
    </HeroContainer>
  )
}