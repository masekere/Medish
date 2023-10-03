import { CheckCircle, Phone } from '@mui/icons-material'
import { List, ListItem, Stack, createSvgIcon, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WavyBg from "assets/images/background/3.jpg"
import Image from "assets/images/video/2.jpg"
import { Link } from 'react-router-dom'

const MedicalCallIcon = createSvgIcon(
  <svg className='medical-icon' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0.000253677 -447.999 512 512">
    <path d="M 314.223 -330.545 c 9.4893 0 17.209 7.7188 17.209 17.207 v 45.8887 h 45.8936 c 9.4893 0 17.209 7.7188 17.209 17.207 v 48.5352 c 0 9.4883 -7.7197 17.207 -17.209 17.207 h -45.8936 v 45.8887 c 0 9.4883 -7.7197 17.207 -17.209 17.207 h -48.54 c -9.4883 0 -17.209 -7.7188 -17.209 -17.207 v -45.8887 h -45.8926 c -9.4893 0 -17.209 -7.7188 -17.209 -17.207 v -48.5352 c 0 -9.4883 7.7197 -17.207 17.209 -17.207 h 45.8926 v -45.8887 c 0 -9.4883 7.7207 -17.207 17.209 -17.207 h 48.54 z M 377.325 -252.449 h -53.3945 c -4.1426 0 -7.501 -3.3565 -7.501 -7.5 v -53.3887 c 0 -1.2168 -0.9893 -2.207 -2.207 -2.207 h -48.54 c -1.2168 0 -2.207 0.9902 -2.207 2.207 v 53.3887 c 0 4.1436 -3.3584 7.5 -7.501 7.5 h -53.3936 c -1.2168 0 -2.207 0.9902 -2.207 2.207 v 48.5352 c 0 1.2168 0.9902 2.207 2.207 2.207 h 53.3936 c 4.1436 0 7.501 3.3574 7.501 7.5 v 53.3887 c 0 1.2178 0.9902 2.207 2.207 2.207 h 48.54 c 1.2178 0 2.207 -0.9893 2.207 -2.207 v -53.3887 c 0 -4.1426 3.3594 -7.5 7.501 -7.5 h 53.3945 c 1.2168 0 2.207 -0.9902 2.207 -2.207 v -48.5352 c 0 -1.2168 -0.9902 -2.207 -2.207 -2.207 z M 275.958 -80.1924 l 61.7812 61.7744 c 3.25 3.25 5.04 7.5703 5.04 12.167 c 0 4.5957 -1.79 8.917 -5.04 12.167 l -27.459 27.4561 c -19.752 19.751 -46.0156 30.6279 -73.9492 30.6279 c -27.9346 0 -54.1973 -10.877 -73.9492 -30.6289 l -131.8 -131.785 c -40.7754 -40.7744 -40.7754 -107.115 0 -147.886 l 6.8613 -6.8604 c 0.001 -0.002 0.002 -0.0029 0.0029 -0.0039 s 0.0029 -0.002 0.0039 -0.0029 l 20.5898 -20.5879 c 6.71 -6.708 17.627 -6.708 24.3369 0 l 61.7812 61.7744 c 3.251 3.25 5.041 7.5713 5.041 12.167 c 0 4.5977 -1.791 8.917 -5.041 12.1689 l -20.5889 20.5869 c -0.002 0.002 -0.0029 0.0039 -0.0049 0.0049 c -0.0029 0.001 -0.0039 0.0029 -0.0059 0.0039 l -2.7402 2.7412 c -5.1846 5.1836 -8.0391 12.0752 -8.0391 19.4062 c 0 7.3301 2.8545 14.2227 8.0391 19.4072 l 68.6445 68.6377 c 5.1846 5.1856 12.0771 8.0391 19.4092 8.0391 s 14.2236 -2.8535 19.4092 -8.0381 l 23.3398 -23.3379 c 3.25 -3.25 7.5713 -5.04 12.168 -5.04 s 8.919 1.79 12.1689 5.041 z M 68.6475 -263.148 l -15.2891 15.2881 l 64.9023 64.8965 l 15.2891 -15.2881 c 0.8604 -0.8613 0.8604 -2.2607 0 -3.1211 l -61.7812 -61.7754 c -0.5342 -0.5342 -1.1436 -0.6465 -1.5606 -0.6465 s -1.0264 0.1123 -1.5606 0.6465 z M 299.673 22.7646 l 1.5586 -1.5566 l -65.0615 -64.9717 c -7.6357 6.4346 -17.1943 9.9473 -27.2969 9.9473 c -11.3389 0 -21.999 -4.415 -30.0166 -12.4316 l -68.6455 -68.6387 c -8.0176 -8.0185 -12.4326 -18.6777 -12.4326 -30.0146 c 0 -10.123 3.5273 -19.6982 9.9883 -27.3418 l -65.0166 -65.0098 l -1.5606 1.5606 c -34.9268 34.9238 -34.9268 91.7471 0 126.671 l 131.8 131.786 c 16.9189 16.9189 39.4141 26.2354 63.3418 26.2354 c 23.9268 0 46.4219 -9.3174 63.3418 -26.2354 z M 327.131 -4.6904 c 0.5342 -0.5342 0.6475 -1.1436 0.6475 -1.5606 s -0.1123 -1.0273 -0.6465 -1.5596 l -61.7822 -61.7754 c -0.5342 -0.5352 -1.1436 -0.6475 -1.5606 -0.6475 s -1.0264 0.1123 -1.5606 0.6465 l -15.334 15.333 l 64.9434 64.8545 z M 446.964 -382.971 c 41.9395 41.9355 65.0361 97.6904 65.0361 156.996 c 0 94.7441 -60.1562 179.125 -149.69 209.968 c -0.8086 0.2793 -1.6328 0.4111 -2.4434 0.4111 c -3.1133 0 -6.0215 -1.9512 -7.0908 -5.0596 c -1.3496 -3.917 0.7314 -8.1855 4.6475 -9.5342 c 83.4844 -28.7588 139.574 -107.438 139.574 -195.785 c 0.002 -114.154 -92.8789 -207.025 -207.044 -207.025 c -88.8154 0 -167.634 56.4678 -196.131 140.514 c -1.3311 3.9228 -5.5889 6.0244 -9.5127 4.6943 c -3.9228 -1.3301 -6.0244 -5.5879 -4.6943 -9.5107 c 30.5625 -90.1367 115.091 -150.697 210.338 -150.697 c 59.3105 0 115.072 23.0947 157.011 65.0293 z" />
  </svg>,
  'Icon'
)

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