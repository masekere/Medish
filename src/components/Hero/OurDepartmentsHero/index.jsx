import Typography from '@mui/material/Typography'
const slider1 = 'https://ucarecdn.com/a9e291be-1758-46f4-a227-243f78a9e04c/assets_images_sliders_2.jpg';
import Breadcrumbs from 'components/common/Breadcrumbs';
import HeroSection from "components/Hero/HeroContainer";
import PlayButton from 'components/common/button/PlayButton';
import ButtonActions from 'components/common/ButtonActions';
import Button from 'components/common/button';

const maxWidth = { xs: 400, xl: 600 }

const content = {
    h1: 'Wide Range Of Medical Services For Your Family',
    desc: 'The healt and well-being of our patients and their health care teamwill always be our priorty, so we best practices',
    breadCrumbItems: [
        {
            name: 'home',
            url: '/'
        },
        {
            name: 'departments',
            url: '/departments'
        },
    ],
    action1: 'find a doctor',
    action2: 'our core values',
}


const Actions = () => (
    <ButtonActions>
        <Button variant="cw">
            {content.action1}
        </Button>
        <PlayButton />
    </ButtonActions>
)

export default function OurDepartmentsHero() {
    return (
        <HeroSection src={slider1}>
            <Typography maxWidth={maxWidth} mb={2} variant="h1">{content.h1}</Typography>
            <Typography maxWidth={maxWidth} mb={5} variant="lead">{content.desc}</Typography>
            <Actions />
            <Breadcrumbs items={content.breadCrumbItems} />
        </HeroSection>
    )
}
