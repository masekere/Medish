
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import WorldMapImg from "assets/images/background/world-map.png"
import Accordion from 'components/Accordion';
import Button from '@mui/material/Button'
import FavoriteIcon from "@mui/icons-material/Favorite";
import Divider from '@mui/material/Divider'


/** @type {import("@mui/material").SxProps} */
const styles = {
  container: {
    px: {xs: '2rem',sm: '3rem',md: '4rem',lg: '5rem'},
    mx: 'auto',
    maxWidth: '1400px',
    display: {xs: 'block', lg: 'flex'},

    button: {
      height: 60
    }
  }
}


const content = {
  h2: "Helping Patients From Around The Globe!!",
  body1: 'Our staff strives to make each interaction with patients clear, concise, and inviting. Support them important work of Medicsh Hospital by making a much-needed donation today.',
  body2: 'We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.',
  accordion: [
    {
      summary: "Which Plan Is Right For Me?",
      details: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases."
    },
    {
      summary: "Do I Have To Commit To A Contract?",
      details: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases."
    },
    {
      summary: "What Payment Methods Are Available?",
      details: "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medicsh Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases."
    },
  ],
  cta: 'Make A Gift'
}

export default function Donations() {

  return (
    <Box sx={styles.container} component={'section'}>
          <Box width={{lg: '50%'}}>
            <Typography mb={4} maxWidth={526} variant='h2'>{content.h2}</Typography>
            <Box display={{xs: 'none', lg: 'block'}} component="img" src={WorldMapImg} alt={'World Map'} />
          </Box>
          <Box width={{lg: '50%'}}>
            <Typography fontWeight={'bold'} color={'secondary'} mb={2} >{content.body1}</Typography>
            <Typography  mb={4}>{content.body2}</Typography>
            <Divider sx={{borderBottomColor: 'primary.main', borderBottomWidth: 3}} />
            <Accordion items={content.accordion} />
            <Button sx={{mt: 2}} variant='contained'>
              {content.cta} <FavoriteIcon />
            </Button>
          </Box>
    </Box>
  )
}
