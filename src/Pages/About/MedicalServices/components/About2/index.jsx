import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WavyBg from "assets/images/background/wavy-pattern.png"
import Image from "assets/images/video/4.jpg"
import EmergencyCases from './components/EmergencyCases'
import Advantages from './components/Advantages'

const content = {
  h2: "Sets The Standard For High Quality Care And Patient Safety!!",
  body1: "Our doctors include highly qualified practitioners who come from a range of backgrounds and bring a diversity of skills. Besides, our administration staff all have exceptional people skills",
  body2: "Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.",
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  main: {
    backgroundColor: "#1d2a4d",
    backgroundImage: `url(${WavyBg})`,
    pb: 0,
    overflow: 'visible',
    display: {xs: 'block', xl: 'flex'},
  },
  stack: {
    px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem', xl: 0},
    pl: {xl: '118px'}, 
    width: {xl: '50%'},
  },
  container: {
    display: "flex"
  },
  img: {
    display: {xs: 'none', xl: 'block'},
    height: 880,
    marginLeft: 'auto',
    marginBottom: '-5rem',
    borderTopLeftRadius: "32px",
  },
}

export default function About2() {
  return (
    <Box sx={styles.main} component={'section'}>
      <Stack sx={styles.stack}>
        <Typography mb={5} color={'white'} variant="h2">{content.h2}</Typography>
        <Typography mb={4} fontWeight={'bold'} color={'white'}>{content.body1}</Typography>
        <Typography color={'#788fc8'} mb={3}>{content.body2}</Typography>
        <Advantages />
        <EmergencyCases />
      </Stack>
      <Box sx={styles.img} component="img" src={Image} alt={'About Image'} />
    </Box>
  )
}