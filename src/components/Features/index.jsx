import {Stack, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const WavyBg = 'https://ucarecdn.com/507dcb5f-ae42-4f9b-b409-ec53b475cf1b/assets_images_background_3.jpg';
const Image = 'https://ucarecdn.com/016b9d49-629c-46d5-b633-309d903c95d1/assets_images_video_2.jpg';
import { Link } from 'react-router-dom'

const UnderlineLink = styled((props) => (
  <Typography component={Link} variant='underline'  {...props} />
))(() => ({
  color: 'white !important',
  ':hover': {
    color: 'white !important',
  },
  ':before': {
    backgroundColor: 'white !important'
  }
}));

const content = {
  subtitle: "True Healthcare For Your Family",
  h2: "Delivering Tomorrow’s Care For Your Family.",
  body1: "Our doctors include highly qualified practitioners who come from a range of backgrounds and bring a diversity of skills. Our support staff all have exceptional people skills.",
  cta: "Find A Dotor Now!"
}

/** @type {import("@mui/material").SxProps} */
const styles = {
  main: {
    backgroundColor: "#1d2a4d",
    backgroundImage: `linear-gradient(-90deg, #13C1D9BF 18%, #13c5dd 70%), url(${WavyBg})`,
    backgroundAttachment: 'fixed',

    pb: 0,
    overflow: 'visible',
    display: {xs: 'block', xl: 'flex'},


  },
  stack: {
    px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem', xl: 0},
    width: {xl: '50%'},
  },
  img: {
    display: {xs: 'none', xl: 'block'},
    width: 648,
    marginRight: 'auto',
    backgroundImage: `url(${Image})`,
    marginBottom: '-5rem',
    borderTopRightRadius: "2rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    
  },
}

export default function Features() {
  return (
  <Box sx={styles.main} component={'section'}>
      <Box sx={styles.img} />
      <Stack {...styles.stack}>
        <Typography  color={'white'} variant="subtitle">{content.subtitle}</Typography>
        <Typography mb={5} color={'white'} variant="h2">{content.h2}</Typography>
        <Typography mb={4} fontWeight={'bold'} color={'white'}>{content.body1}</Typography>
        <Box mb={7}>
          <UnderlineLink>{content.cta}</UnderlineLink>
        </Box>
      </Stack>
    </Box>
  )
}