import Box from '@mui/material/Box'
import Heading from './components/Heading'
import BlogCardSwiper from './components/BlogCardSwiper'

export default function Blog() {
  return (
    <Box component={'section'}>
      <Heading />
      <BlogCardSwiper />
    </Box>
  )
}