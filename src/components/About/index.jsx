import Box from '@mui/material/Box'
import Heading from 'components/Headers/AboutHeader'
import ImageGrid from 'components/ImageGrid'

export default function About() {
  return (
    <Box component={'section'}>
        <Heading />
        <ImageGrid />
    </Box>
  )
}