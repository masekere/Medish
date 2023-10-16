import MuiBox from '@mui/material/Box'
import VideoButton from 'components/common/button/Video'
import { styled } from '@mui/material'

const content = {
    title: 'Watch Our Presentation Online',
    to: "#",

}

const Box = styled(MuiBox)({
    position: 'relative',
    backgroundColor: 'grey',
    borderRadius: '8px 8px 0 8px',
    height: 528,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",

})

const styles = {
    vid: {
        right: 0,
        bottom: 0
    }
}

const PresentationVideoCard = ({VideoThumb}) => (
    <Box sx={{backgroundImage: `url(${VideoThumb})`}}>
      <VideoButton sx={styles.vid} title={content.title} to={content.to} />
    </Box>
)

export default PresentationVideoCard