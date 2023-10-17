import { styled, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Img from 'assets/images/departments/1.jpg'
import PrimaryLink from 'components/PrimaryLink'
import AdvantagesList from 'components/common/AdvantagesList'

const Card = styled(Box)({
    boxShadow: '0px 5px 83px 0px rgba(9, 29, 62, 0.08)',
    borderRadius: 8,
    maxWidth: 450
})

const styles = {
    // m: '4rem',

    img: {
        width: '100%',
        borderRadius: '8px 8px 0 0'
    },
    content: {
        p: '10px 50px 40px'
    }
}

const content = {
    h4: 'Neurology Clinic',
    desc: 'Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.',
    advantages: ['Neurocritical Care', 'Neuro Oncolgy','Geriatric Neurology'],
    action: 'Read more'
}

const DepartmentsCard = () => (
   <Card sx={styles}>
        <Box component="img" src={Img} alt={'sds'} />
        <Stack sx={styles.content} spacing={2}>
          <Typography variant='h4'>{content.h4}</Typography>
          <Typography>{content.desc} <PrimaryLink>{content.action}</PrimaryLink></Typography>
          <AdvantagesList items={content.advantages}  />
        </Stack>
   </Card>
)

export default DepartmentsCard