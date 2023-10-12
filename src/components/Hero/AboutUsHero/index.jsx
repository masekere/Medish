import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import slider1 from 'assets/images/sliders/2.jpg'
import Breadcrumbs from 'components/common/Breadcrumbs';
import Button from "components/common/button";
import HeroSection from "components/Hero/HeroContainer";
import { Link } from 'react-router-dom';
import Actions from './Actions';

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
    ]
}

const maxWidth = { xs: 400, xl: 600 }

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
