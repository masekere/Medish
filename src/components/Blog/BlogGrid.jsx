import Box from '@mui/material/Box'
import BlogHeader from 'components/Headers/BlogHeader'
const Blog1 = 'https://ucarecdn.com/77c5fdee-f1de-42d1-ba79-ed8f5398811d/assets_images_blog_grid_1.jpg';
const Blog2 = 'https://ucarecdn.com/ef331355-bbfc-4e0e-a441-75945910cec6/assets_images_blog_grid_2.jpg';
const Blog3 = 'https://ucarecdn.com/e19c17a3-5ff6-419e-a164-955c6d1a8936/assets_images_blog_grid_3.jpg';
const Blog4 = 'https://ucarecdn.com/70eff9c6-519b-47ab-93fa-6a323b3cda83/assets_images_blog_grid_4.jpg';
const Blog5 = 'https://ucarecdn.com/ea4c2052-1474-4e75-9177-bc22a2a89bad/assets_images_blog_grid_5.jpg';
const Blog6 = 'https://ucarecdn.com/c363bcbc-c8c1-436f-b39e-b41a46bf8a04/assets_images_blog_grid_6.jpg';
import BlogCard from 'components/Cards/BlogCard'
import Container from '@mui/material/Container'



const content = {
    blogs: [
        {
            date: [20, 'Jan', '2021'],
            img: Blog1,
            category: [
                {
                    name: "mental health",
                    url: "#"
                },
                {
                    name: "wellness",
                    url: "#"
                }
            ],
            author: "martin king",
            title: "6 tips to protect your mental health when sick",
            bio: "It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or...",
            url: '/blog/single-blog'
        },
        {
            date: [20, 'Jan', '2021'],
            img: Blog2,
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
            author: "John Ezak",
            title: "Unsure About Wearing a Face Mask? How and Why",
            bio: "That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or...",
            url: '/blog/single-blog'
        },
        {
            date: [20, 'Jan', '2021'],
            img: Blog3,
            category: [
                {
                    name: "lifestyle",
                    url: "#"
                },
                {
                    name: "nutrition",
                    url: "#"
                }
            ],
            author: "Saul Wade",
            title: "Tips for Eating Healthy When Working From Home",
            bio: "You’re on a conference call and somehow wandered into the kitchen. Next thing know you’re eating crackers and dry cereal out of the box. Or...",
            url: '/blog/single-blog'
        },
        {
            date: [20, 'Jan', '2021'],
            img: Blog4,
            category: [
                {
                    name: "mental health",
                    url: "#"
                },
                {
                    name: "wellness",
                    url: "#"
                }
            ],
            author: "Mark Ezak",
            title: "Why Coronavirus Cases Among Adults Is Bad News",
            bio: "A new surge of coronavirus cases has spread across the country and while there’s still so much to learn about the virus, how it’s transmitted...",
            url: '/blog/single-blog'
        },
        {
            date: [20, 'Jan', '2021'],
            img: Blog5,
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
            author: "Janette Baker",
            title: "Why Do People Get Kidney Stones in the Summer?",
            bio: "Summer may have just officially started, but kidney stone season began a couple of weeks ago. Doctors see an increase in kidney stone cases when...",
            url: '/blog/single-blog'
        },
        {
            date: [20, 'Jan', '2021'],
            img: Blog6,
            category: [
                {
                    name: "lifestyle",
                    url: "#"
                },
                {
                    name: "nutrition",
                    url: "#"
                }
            ],
            author: "Marie Black",
            title: "Do Any Drugs Really Work to Treat Coronavirus?",
            bio: "While most people who get COVID-19 are able to recover at home, the rush is on to find a treatment that’s safe and effective against...",
            url: '/blog/single-blog'
        },
    ],
}

const styles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 3
}

export default function BlogGrid() {
    return (
        <Container sx={styles} component={'section'} maxWidth="xxl">
            {content.blogs.map((item, index) => (
                <BlogCard item={item} key={index} />
            ))}
        </Container>
    )
}