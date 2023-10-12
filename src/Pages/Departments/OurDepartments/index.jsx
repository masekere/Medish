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
import DepartmentHeaderCard from 'components/Cards/DepartmentHeaderCard';
import PresentationVideoCard from 'components/Cards/PresentationVideoCard';
import PriceListCard from 'components/Cards/PriceListCard';

const content = {
    title: 'Neurology Clinic',
    desc: 'All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children.'
}

export function Component() {
    const [tabIndex, setTabIndex] = useState(0)
    const [count, setCount] = useState(1)

    return (
        <Box m={10}>
            <Chip className="Chip" label={'$55'} variant='outlined' />
            <Chip className="Chip" label={'$55'} />
            <Chip className="Chip" label={<Phone />} variant='icon' />
            <Tags items={{h5: 'Tags', tags: ['One', 'Two', 'Three']}} />
            <SearchCard />
            {/* <RecentPostsCard item={{
                h5: 'Recent Posts',
                posts: [
                    {
                        subtitle: 'Jan 25, 2021',
                        title: 'Unsure About Wearing A Face Mask? Here Is How',
                        url: Post1Img
                    },
                    {
                        subtitle: 'Jan 27, 2021',
                        title: 'Tips For Eating Healthy When Working At Home',
                        url: Post2Img
                    },
                    {
                        subtitle: 'Jan 23, 2021',
                        title: 'Why Coronavirus Cases Among Adults Is Bad News',
                        url: Post3Img
                    },
                ]
            }} /> */}
            <NavPosts
                items={[
                    {
                        subtitle: 'Jan 25, 2021',
                        title: 'Unsure About Wearing A Face Mask? Here Is How',
                        url: Post1Img
                    },
                    {
                        subtitle: 'Jan 23, 2021',
                        title: 'Why Coronavirus Cases Among Adults Is Bad News',
                        url: Post3Img
                    },
                ]}
            />
            <Bio 
                item={{
                    avatar: BioAvatar,
                    h4: 'Mahmoud Baghagho',
                    desc: 'Founded by Begha over many cups of tea at her kitchen table in 2009, our brand promise is simple: to provide powerful digital marketing',
                    social: [
                        {
                            icon: <FacebookIcon />,
                            url: "#",
                            color: 'rgb(72 109 181)'
                        },
                        {
                            icon: <InstagramIcon />,
                            url: "",
                            color: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'
                        },
                        {
                            icon: <TwitterIcon />,
                            url: "#",
                            color: 'rgb(39 164 243)'
                        },
                    ]
                }}
            />
            <ProductCard item={{
                img: Product1,
                name: 'Green Tea',
                price: '$15.00'
            }} />
            <PriceRange />
            <Products />
            <Tabs 
             items={[
                {
                    label: 'Home',
                    icon: <Home />
                },
                {
                    label: 'Home',
                    icon: <Home />
                },
                {
                    label: 'Home',
                    icon: <Home />
                },
             ]}
             tabIndex={tabIndex} 
             setTabIndex={setTabIndex} />
             
             <Counter count={count} setCount={setCount} />
             <DepartmentHeaderCard title={content.title} desc={content.desc}  />
             <PresentationVideoCard />
             <PriceListCard item={{
                h6: 'Investigations Price List',
                prices: [
                    {
                        name: 'Umbilical Cord Appearance',
                        price: '$50'
                    },
                    {
                        name: 'Cardiac Electrophysiology',
                        price: '$50'
                    },
                    {
                        name: 'Repositioning Techniques',
                        price: '$60'
                    },
                    {
                        name: 'Geriatric Neurology',
                        price: '$75'
                    },
                    {
                        name: 'Nuclear Cardiology',
                        price: '$45'
                    },
                    {
                        name: 'Neurocritical Care',
                        price: '$55'
                    },
                ]
             }} />
        </Box>
    )
}

Component.displayName = 'DepartmentsPage'