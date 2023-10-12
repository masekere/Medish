import Box from '@mui/material/Box'
import BlogHeader from 'components/Headers/BlogHeader'
import Blog1 from "assets/images/blog/grid/1.jpg"
import Blog2 from "assets/images/blog/grid/2.jpg"
import Blog3 from "assets/images/blog/grid/3.jpg"
import Blog4 from "assets/images/blog/grid/4.jpg"
import Blog5 from "assets/images/blog/grid/5.jpg"
import Blog6 from "assets/images/blog/grid/6.jpg"
import BlogCard from 'components/Cards/BlogCard'
import CardSwiper from 'components/Cards/CardSwiper'

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
    },
  ],
}

export default function BlogSlider() {
  return (
    <Box component={'section'}>
      <BlogHeader />
      <CardSwiper Card={BlogCard} items={content.blogs} />
    </Box>
  )
}