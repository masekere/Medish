import Breadcrumbs from "components/common/Breadcrumbs";
import HeroContainer from "components/Hero/HeroContainer";
const Bg = 'https://ucarecdn.com/4c28715b-52a7-4330-8b87-220d93b61d8f/assets_images_pagetitles_3.jpg';
import HeroCard from "components/Cards/HeroCard";
import Box from '@mui/material/Box'

const styles = {
    mb: 10,
    overflow: 'visible',

    '.Breadcrumbs': {
        position: 'relative',
        mt: 3,
    },

    box: {
        mb: '-12rem'
    }
}

export default function DepartmentsHero({content}) {
    return (
        <HeroContainer sx={styles} src={Bg}>
            <Box sx={styles.box}>
                <Breadcrumbs items={content.breadcrumbs} />
                <HeroCard h1={content.h1} desc={content.desc} />
            </Box>
        </HeroContainer>
    )
}