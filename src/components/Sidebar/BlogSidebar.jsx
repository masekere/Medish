import EmergencyCasesCard from "components/Cards/EmergencyCasesCard"
import OpeningHoursCard from "components/Cards/OpeningHoursCard"
import Button from "components/common/button"
import { DownloadReportIcon, InfoIcon } from "assets/Svg"
import Stack from '@mui/material/Stack'
import CategoryCard from "components/Cards/CategoryCard"
import SearchCard from "components/Cards/SearchCard"
import Products from "components/Products"
import PriceRange from "components/PriceRange"
import Tags from "components/Tags"
import RecentPostsCard from "components/Cards/RecentPostsCard"
const Post1Img = 'https://ucarecdn.com/9708fe7b-e1fd-4b56-a416-dbc1df29e860/assets_images_blog_sidebar_post1.jpg';
const Post2Img = 'https://ucarecdn.com/dfeb09ee-5598-4d39-b640-2ff5d6d50ca0/assets_images_blog_sidebar_post2.jpg';
const Post3Img = 'https://ucarecdn.com/c81f61d5-70ec-44c8-93aa-a7baa3c76ab3/assets_images_blog_sidebar_post3.jpg';

const styles = {
    action1: {
        ':after': {
            bgcolor: 'primary.main'
        }
    },
    action2: {
        ':after': {
            bgcolor: 'secondary.light'
        }
    }
}

const content = {
    recentPosts: {
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
    },
    action1: <><InfoIcon />covid-19 latest update</>,
    action2: <><DownloadReportIcon />2020 patient reports</>,
    services: {
        h5: 'Medical Services',
        categories: [
            {
                category: 'Neurology',
                count: 9,
                url: '#'
            },
            {
                category: 'Cardiology',
                count: 2,
                url: '#'
            },
            {
                category: 'Pathology',
                count: 5,
                url: '#'
            },
            {
                category: 'Laboratory',
                count: 1,
                url: '#'
            },
            {
                category: 'Pediatric',
                count: 7,
                url: '#'
            },
        ]
    },
    ProductTags: {
        h5: 'Tags',
        tags: [
            {
                name: 'Life style',
                url: '#'
            },
            {
                name: 'Nutrition',
                url: '#'
            },
            {
                name: 'Infectious',
                url: '#'
            },
            {
                name: 'Disease',
                url: '#'
            },
            {
                name: 'Insights',
                url: '#'
            },
            {
                name: 'Urinary',
                url: '#'
            },
            {
                name: 'Tips',
                url: '#'
            },
        ]
    }
}
const BlogSiderbar = () => (
    <>
            <SearchCard />
            <RecentPostsCard item={content.recentPosts} />
            <CategoryCard items={content.services}  />
            <Tags items={content.ProductTags} />
            <EmergencyCasesCard />
        </>
)

export default BlogSiderbar