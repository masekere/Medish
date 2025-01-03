import Typography from '@mui/material/Typography'
const slider1 = 'https://ucarecdn.com/a9e291be-1758-46f4-a227-243f78a9e04c/assets_images_sliders_2.jpg';
import Breadcrumbs from 'components/common/Breadcrumbs';
import HeroSection from "components/Hero/HeroContainer";
import Button from "components/common/button";
import ButtonActions from 'components/common/ButtonActions';

const maxWidth = { xs: 400, xl: 600 }

const content = {
    h1: 'Sets The Standard For High Quality Care And Patient Safety!!',
    desc: 'Our doctors include highly qualified practitioners who come from a range of backgrounds and bring a diversity of skills. Besides, our staff have exceptional people skills.',
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
        <Button variant="co">
            {content.action2}
        </Button>
    </ButtonActions>
)


export default function AboutUsHero() {
    return (
        <HeroSection src={slider1}>
            <Typography sx={{fontSize: {xl: 40}}} maxWidth={maxWidth} mb={2} variant="h1">{content.h1}</Typography>
            <Typography maxWidth={maxWidth} mb={5} variant="lead">{content.desc}</Typography>
            <Actions />
            <Breadcrumbs items={content.breadCrumbItems} />
        </HeroSection>
    )
}
