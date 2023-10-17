import Box from '@mui/material/Box'
import { Home, MediationRounded, Phone } from '@mui/icons-material';
import Chip from 'components/common/Chip';
import Tags from 'components/Tags';
import CategoryCard from 'components/Cards/CategoryCard';
import SearchCard from 'components/Cards/SearchCard';
import RecentPostsCard from 'components/Cards/RecentPostsCard';
import Post1Img  from 'assets/images/blog/sidebar/post-1.jpg'
import Post2Img  from 'assets/images/blog/sidebar/post-2.jpg'
import Post3Img  from 'assets/images/blog/sidebar/post-3.jpg'
import NavPosts from 'components/NavPosts';
import Bio from 'components/Bio';
import BioAvatar from 'assets/images/blog/author/2.jpg'
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import ProductCard from 'components/Cards/ProductCard';
import Product1 from 'assets/images/shop/grid/1.jpg'
import PriceRange from 'components/PriceRange';
import Products from 'components/Products';
import { AppBar, Tab } from '@mui/material'
import Tabs from 'components/common/Tabs';
import { useState } from 'react';
import Icon from "@mui/material/Icon";
import Counter from 'components/common/Counter';
import DepartmentHeaderCard from 'components/Cards/HeroCard';
import PresentationVideoCard from 'components/Cards/PresentationVideoCard';
import PriceListCard from 'components/Cards/PriceListCard';
import OurDepartmentsHero from 'components/Hero/OurDepartmentsHero';
import DepartmentsCard from 'components/Cards/DepartmentsCards';
import Services from 'components/Services/Services2';
import Features3 from 'components/Features/Features3';
import Testimonial2 from 'components/Testimonial/Testimonial2';
import Appointment2 from 'components/Appointment/Appointment2';
import WhyUs from 'components/WhyUs';
import Process from 'components/Process';

const content = {
    title: 'Neurology Clinic',
    desc: 'All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children.'
}

export function Component() {
    const [tabIndex, setTabIndex] = useState(0)
    const [count, setCount] = useState(1)

    return (
        <>
            <OurDepartmentsHero />
            <Services />
            <Features3 />
            <Testimonial2 />
            <Box mt={20} />
            <Appointment2 />
            <WhyUs />
            <Process />

        </>
    )
}

Component.displayName = 'DepartmentsPage'