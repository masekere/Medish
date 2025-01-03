import Stack from '@mui/material/Stack'
const BlogImg = 'https://ucarecdn.com/a0800ba7-bd2c-409f-8d1d-b844886c0aba/assets_images_blog_single_1.jpg';
import BlogHero from "components/Hero/BlogHero";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import PrimaryLink from 'components/PrimaryLink'
import Chip from 'components/common/Chip';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/FacebookRounded'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import SocialMediaBlock from 'components/common/SocialMediaBlock';
import NavPosts from 'components/NavPosts';
const Post1Img = 'https://ucarecdn.com/9708fe7b-e1fd-4b56-a416-dbc1df29e860/assets_images_blog_sidebar_post1.jpg';
const Post3Img = 'https://ucarecdn.com/c81f61d5-70ec-44c8-93aa-a7baa3c76ab3/assets_images_blog_sidebar_post3.jpg';
const BioAvatar = 'https://ucarecdn.com/1730c8f6-3a5c-4eb2-9b7c-3c7d59829a2b/assets_images_blog_author_2.jpg';
import Bio from 'components/Bio';

const content = {
    date: [20, 'Jan', '2021'],
    category: [
        {
            name: "infectious",
            url: "#"
        },
        {
            name: "tips",
            url: "#"
        }
    ],
    author: 'martin king',
    comments: 5,

    h4: '6 Tips To Protect Your Mental Health When You Are Sick',
    body: [
        "It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a medical condition – and that’s certainly true if you test positive for COVID-19, or are presumed to be positive. If your symptoms aren’t severe and you can recover at home, this will involve home isolation until it’s safe for you to be near others without potentially spreading the infection.",
        "Isolation protects others from getting sick – but for the person who is sick, it might seem like one more thing on top of an already stressful situation. “Stress negatively affects your body, so while you rest up and work on recovering physically, it’s important to keep your mental health in check, too,” says psychiatrist Amit Anand, MD.",
        "Here are some ways to keep anxiety and sadness from creeping in while you recover from COVID-19:",
        "Focus on what you can know and control You may not know how you got infected, or how long it will take to recover. Instead of focusing your energy on regret or what ifs, double down on what you can do. Your job now is to take care of yourself, get well and avoid spreading the infection to anyone else."
    ],
    tags: [
        {
            label: 'Life Style',
            url: '#'
        },
        {
            label: 'Nutrition',
            url: '#'
        },
        {
            label: 'Infectious',
            url: '#'
        },
    ],
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
    ],
    navPosts: [
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
    ],
    bio: {
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
    }
}

const styles = {
    h4: {
        fontSize: 40
    },
    date: {
        bgcolor: 'white',
        position: 'absolute',
        right: 70,
        top: '-1rem',
        py: '18px',
        px: '15px',
        boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.15)',
        borderRadius: '8px 8px 8px 0px',

        ':before': {
            content: "''",
            position: 'absolute',
            left: 0,
            top: 18,
            bottom: 18,
            bgcolor: 'primary.main',
            width: '3px',
        }
    },
    category: {
        display: 'flex',
        gap: 1,
        aligncontents: 'center',
        textTransform: 'Capitalize',
        mb: 1,
        a: {
            fontWeight: '400'
        }
    },
    divider: {
        pt: 5,
        mb: 5,
    }
}

const FeatureImage = () => (
    <Box position={'relative'}>
        <Box borderRadius={'8px 8px 8px 0px'} maxWidth={'100%'} height={'auto'} component="img" src={BlogImg} alt={'Blog Img'} />
        <Stack spacing={'-10px'} sx={styles.date}>
            <Typography pb={.5} color={'secondary.light'} fontWeight={'bold'} fontSize={26}>{content.date[0]}</Typography>
            <Typography color={'secondary'} fontSize={13}>{content.date[1]}</Typography>
            <Typography color={'secondary'} fontSize={13}>{content.date[2]}</Typography>
        </Stack>
    </Box>
)

const Categories = () => (
    <Box sx={styles.category}>
        <PrimaryLink fontSize={14}>{content.category[0].name}</PrimaryLink>
        <Divider orientation="vertical" sx={{ height: 14 }} />
        <PrimaryLink fontSize={14}>{content.category[1].name}</PrimaryLink>
        <Typography ml={3} fontSize={14}>{content.author}</Typography>
        <Typography ml={'auto'} variant='body2'>{content.comments} comments</Typography>
    </Box>
)

const Content = () => (
    <Stack spacing={3}>
        <Typography variant='h4'>{content.h4}</Typography>
        {content.body.map((item, index) => (
            <Typography key={index}>{item}</Typography>
        ))}
    </Stack>
)

const Tags = () => (
    <Box display={'flex'} gap={1} flexWrap={'wrap'} justifyContent={'center'}>
        {content.tags.map((item, index) => (
            <Chip variant='outlined' label={item.label} key={index} component={Link} to={item.url} />
        ))}
        <Box flex={{ sm: 1 }} />
        <Box display={{ sm: 'flex' }} gap={2} alignItems={'center'}>
            <Typography textAlign={'center'}>Share</Typography>
            <SocialMediaBlock items={content.social} />
        </Box>
    </Box>
)

export default function BlogContent() {
    return (
        <Stack spacing={2} mb={5}>
            <BlogHero />
            <FeatureImage />
            <Categories />
            <Content />
            <Tags />
            <Divider/>
            <Box />
            <NavPosts items={content.navPosts} />
            <Bio item={content.bio} />
        </Stack>
    )
}