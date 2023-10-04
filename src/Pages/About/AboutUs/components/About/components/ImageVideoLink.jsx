import Box from '@mui/material/Box'
import About1 from 'assets/images/about/1.jpg'
import About2 from 'assets/images/about/2.jpg'
import VideoButton from 'components/button/Video'

const content = {
    title: 'watch our presentation online',
    url: '#'
}

export function ImageVideLink1() {
    return (
        <Box display={{ xs: 'none', lg: 'block' }} position={'relative'}>
            <Box height={677} component="img" src={About1} alt={'About 1'} />
            <VideoButton to={content.url} title={content.title} />
        </Box>
    )
}

export function ImageVideLink2() {
    return (
        <Box position={'relative'}>
            <Box height={314} component="img" src={About2} alt={'About 2'} />
            <VideoButton sx={{display: { xs: 'flex', lg: 'none' }}} to={content.url} title={content.title} />
        </Box>
    )
}
