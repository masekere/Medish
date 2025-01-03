import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
const WavyBg = 'https://ucarecdn.com/6ea90580-c86d-41ee-933b-c6c1b70e0d7c/assets_images_background_wavypattern.png';
const Image = 'https://ucarecdn.com/a552240f-d28e-44f6-984f-f42516ae5571/assets_images_video_4.jpg';
import AdvantagesList from 'components/common/AdvantagesList'
import EmergencyCasesCard from 'components/Cards/EmergencyCasesCard'

const content = {
  h2: "Sets The Standard For High Quality Care And Patient Safety!!",
  body1: "Our doctors include highly qualified practitioners who come from a range of backgrounds and bring a diversity of skills. Besides, our administration staff all have exceptional people skills",
  body2: "Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.",
  advantages: [
    [" Fractures & Dislocations", "Desensitisation Injections", "Home Medicine Review"],
    ["Health Assessments", "High Quality Care"]
  ],
}

const styles = {
  main: {
    backgroundColor: "#1d2a4d",
    backgroundImage: `url(${WavyBg})`,
    pb: 0,
    overflow: 'visible',
    display: { xs: 'block', xl: 'flex' },
  },
  stack: {
    px: { xs: '2rem', sm: '3rem', md: '4rem', lg: '5rem', xl: 0 },
    pl: { xl: '118px' },
    width: { xl: '50%' },
  },
  container: {
    display: "flex"
  },
  img: {
    display: { xs: 'none', xl: 'block' },
    height: 880,
    marginLeft: 'auto',
    marginBottom: '-5rem',
    borderTopLeftRadius: "32px",
  },
  advantages: {
    gap: 5,
    display: 'flex',
    mb: 3,
  }
}

const Advantages = () => (
  <Box sx={styles.advantages}>
      <AdvantagesList color={'white'} items={content.advantages[0]} />
      <AdvantagesList color={'white'} items={content.advantages[1]} />
  </Box>
)

export default function About2() {
  return (
    <Box sx={styles.main} component={'section'}>
      <Stack sx={styles.stack}>
        <Typography mb={5} color={'white'} variant="h2">{content.h2}</Typography>
        <Typography mb={4} fontWeight={'bold'} color={'white'}>{content.body1}</Typography>
        <Typography color={'#788fc8'} mb={3}>{content.body2}</Typography>
        <Advantages />
        <EmergencyCasesCard />
      </Stack>
      <Box sx={styles.img} component="img" src={Image} alt={'About Image'} />
    </Box>
  )
}

