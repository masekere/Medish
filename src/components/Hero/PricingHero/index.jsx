import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Bg from 'assets/images/sliders/12.jpg'
import Breadcrumbs from 'components/common/Breadcrumbs';
import HeroSection from "components/Hero/HeroContainer";
import Actions from './Actions';
import Button from 'components/common/button';


const content = {
    subtitle: 'Caring For The Health Of You And Your Family.',
    h1: 'Sets The Standard For High Quality Care And Patient Safety!!',
    action1: 'More About Us',
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

/** @type {import("@mui/material").SxProps} */
const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundPosition: "center 70%",

    button: {
        mb: 15,
        height: 60,
    }
}

const maxWidth = { xs: 500, xl: 696 }

export default function PricingHero() {
    return (
        <HeroSection sx={styles} src={Bg}>
            <Box zIndex={300}>
                <Typography fontWeight={'bold'} color={'white'} variant="subtitle">{content.subtitle}</Typography>
                <Typography sx={{ fontSize: { xl: 40 } }} maxWidth={maxWidth} mt={2} mb={2} variant="h1">{content.h1}</Typography>
                <Button variant="cw">
                    {content.action1}
                </Button>
            </Box>
        </HeroSection>
    )
}
