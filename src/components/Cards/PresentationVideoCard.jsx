import Box from '@mui/material/Box'
import VideoButton from 'components/common/button/Video'
import VideoThumb from 'assets/images/video/2.jpg'

const content = {
    title: 'Watch Our Presentation Online',
    to: "#",

}

const styles = {
    backgroundImage: `url(${VideoThumb})`,
    position: 'relative',
    backgroundColor: 'grey',
    borderRadius: '8px 8px 0 8px',
    height: 528,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",

    vid: {
        right: 0,
        bottom: 0
    }
}

const PresentationVideoCard = () => (
    <Box sx={styles}>
      <VideoButton sx={styles.vid} title={content.title} to={content.to} />
    </Box>
)

export default PresentationVideoCard